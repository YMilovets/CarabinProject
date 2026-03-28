import { getTranslations } from "next-intl/server";

import { NextRequest } from "next/server";

import { FORMAT_JSON } from "./constants";
import { Status } from "./types";
import { fetchResponse, isDeniedAccess } from "./utils";

export default async function getGeoData(request: NextRequest) {
	const {
		nextUrl: { searchParams: requestParams },
	} = request;

	const t = await getTranslations("feedbackPage");
	const key = process.env.YNDX_MAPS_API_KEY ?? "";
	const lng = requestParams.get("lng") ?? "";
	const lat = requestParams.get("lat") ?? "";

	const searchParams = new URLSearchParams([
		["apikey", key],
		["format", FORMAT_JSON],
	]);

	if (lng && lat) {
		searchParams.append("geocode", [lng, lat].join(","));
	}

	try {
		if (await isDeniedAccess(request)) {
			return fetchResponse({
				error: t("unauthorized"),
				status: Status.Unauthorized,
			});
		}

		const response = await fetch(
			`${
				process.env.NEXT_PUBLIC_YNDX_MAPS_GEO_API_URL
			}/?${searchParams.toString()}`,
		);

		if (!response.ok) {
			return fetchResponse({
				error: t("errorGeoMessage"),
				status: Status.NotFound,
			});
		}

		const geoData = await response.json();

		return fetchResponse({
			data: geoData,
			status: Status.Success,
		});
	} catch (error) {
		return fetchResponse({
			error: (error as Error).message,
		});
	}
}
