import { getTranslations } from "next-intl/server";

import { connectDB } from "../utils";

import { PLACES_DB } from "./constants";
import { SendPlaceType, Status } from "./types";
import { fetchResponse } from "./utils";

export default async function sendNewPlace({
	category,
	description = "",
	address,
	lat,
	long,
}: SendPlaceType) {
	const t = await getTranslations("feedbackPage");

	const client = await connectDB(String(process.env.DB_DATABASE));

	try {
		const connection = client.db();
		const places = connection.collection(PLACES_DB);

		if (!category.trim()) {
			throw new Error(t("errorPlaceCategory"));
		}

		if (!address.trim()) {
			throw new Error(t("errorPlaceAddress"));
		}

		if (typeof lat === "string" && !lat.trim()) {
			throw new Error(t("errorPlaceLngLat"));
		}

		if (typeof long === "string" && !long.trim()) {
			throw new Error(t("errorPlaceLngLat"));
		}

		const parseFloatLat = typeof lat === "number" ? lat : parseFloat(lat);
		const parseFloatLong = typeof long === "number" ? long : parseFloat(long);

		await places.insertOne({
			category,
			address,
			coords: {
				lat: parseFloatLat,
				long: parseFloatLong,
			},
			description,
			isPublished: false,
			date: new Date(),
		});

		return fetchResponse({
			data: t("successSendPlace"),
			status: Status.Success,
		});
	} catch (error) {
		return fetchResponse({
			error: (error as Error).message,
			status: Status.ServerError,
		});
	}
}
