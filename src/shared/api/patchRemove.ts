import { ObjectId } from "mongodb";
import { getTranslations } from "next-intl/server";

import { NextRequest } from "next/server";

import { PLACES_DB } from "./constants";
import patchPlaces from "./patchPlaces";
import { RouteProps, Status } from "./types";
import { fetchResponse, isDeniedAccess } from "./utils";

export default async function patchPublish(
	request: NextRequest,
	{ params }: RouteProps<{ id: string }>,
) {
	const { id } = await params;
	const t = await getTranslations("publicationPage");

	if (!id) {
		throw new Error(t("errorRemovedPublished"));
	}

	if (await isDeniedAccess(request)) {
		return fetchResponse({
			data: t("unauthorized"),
			status: Status.Unauthorized,
		});
	}

	return patchPlaces({
		collection: PLACES_DB,
	})({
		filter: { _id: new ObjectId(id) },
		update: { $set: { isPublished: false } },
		error: t("errorRemovedPublished"),
		result: t("successRemovedPublish"),
	});
}
