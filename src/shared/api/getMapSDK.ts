import { getTranslations } from "next-intl/server";

import { NextRequest } from "next/server";

import { Status } from "./types";
import { fetchResponse, isDeniedAccess } from "./utils";

export default async function getMapSDK(request: NextRequest) {
	const t = await getTranslations("feedbackPage");
	const key = process.env.YNDX_MAPS_API_KEY ?? "";
	const lang = "ru_RU";
	const searchParams = new URLSearchParams([
		["apikey", key],
		["lang", lang],
	]);

	try {
		if (await isDeniedAccess(request)) {
			return fetchResponse({
				error: t("unauthorized"),
				status: Status.Unauthorized,
			});
		}

		const response = await fetch(
			`${
				process.env.NEXT_PUBLIC_YNDX_MAPS_API_URL
			}/?${searchParams.toString()}`,
		);

		if (!response.ok) {
			return fetchResponse({
				error: t("errorMessage"),
				status: Status.NotFound,
			});
		}

		const sdkCode = await response.text();

		return fetchResponse({ data: sdkCode, status: Status.Success });
	} catch (error) {
		return fetchResponse({ error: (error as Error).message });
	}
}
