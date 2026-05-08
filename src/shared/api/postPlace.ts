import { getTranslations } from "next-intl/server";

import { NextRequest } from "next/server";

import sendNewPlace from "./sendNewPlace";
import { Status } from "./types";
import { fetchResponse, isDeniedAccess } from "./utils";

export default async function postPlace(request: NextRequest) {
	const t = await getTranslations("feedbackPage");

	const {
		category,
		description = "",
		address,
		lat,
		long,
		token,
	} = await request.json();

	if (await isDeniedAccess(request)) {
		return fetchResponse({
			error: t("unauthorized"),
			status: Status.Unauthorized,
		});
	}

	return await sendNewPlace({
		category,
		description,
		address,
		lat,
		long,
		token,
	});
}
