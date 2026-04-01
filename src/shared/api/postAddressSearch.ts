import { getTranslations } from "next-intl/server";

import { NextRequest } from "next/server";

import { DadataResponseType, Status } from "./types";
import { fetchResponse, isDeniedAccess } from "./utils";

function convertAddressSearchResponse(addresses: DadataResponseType) {
	return {
		...addresses,
		suggestions: addresses.suggestions.map(
			({ data: { geo_lat, geo_lon, region_fias_id }, ...options }) => ({
				...options,
				data: {
					geo_lat,
					geo_lon,
					region_fias_id,
				},
			}),
		),
	};
}

export default async function postAddressSearch(request: NextRequest) {
	const t = await getTranslations("feedbackPage");
	const {
		nextUrl: { searchParams },
	} = request;

	try {
		if (await isDeniedAccess(request)) {
			return fetchResponse({
				status: Status.Unauthorized,
				error: t("unauthorized"),
			});
		}
		const response = await fetch(
			new URL(process.env.NEXT_PUBLIC_GEOCODE_MAP_API ?? ""),
			{
				method: "POST",
				body: JSON.stringify({ query: searchParams.get("query") }),
				headers: {
					Accept: "application/json",
					Authorization: `Token ${process.env.GEOCODE_MAP_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			return fetchResponse({
				error: t("errorGeoMessage"),
				status: Status.NotFound,
			});
		}

		const addresses: DadataResponseType = await response.json();

		return fetchResponse({
			data: convertAddressSearchResponse(addresses),
			status: Status.Success,
		});
	} catch (error) {
		return fetchResponse({
			error: (error as Error).message,
			status: Status.Success,
		});
	}
}
