import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import { authConfig } from "../config";
import { connectDB } from "../utils";

import { PLACES_DB } from "./constants";
import { SendPlaceType, Status } from "./types";
import { fetchResponse, verifyRecaptchaToken } from "./utils";

export default async function sendNewPlace({
	category,
	description = "",
	address,
	lat,
	long,
	token,
}: SendPlaceType) {
	const t = await getTranslations("feedbackPage");
	const session = await getServerSession(authConfig);

	const client = await connectDB(String(process.env.DB_DATABASE));

	try {
		const connection = client.db();
		const places = connection.collection(PLACES_DB);
		const verifyResponse = await verifyRecaptchaToken(token);

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

		if (!verifyResponse.success) {
			throw new Error(
				t("errorRecapthaCode", { email: process.env.NEXT_PUBLIC_EMAIL ?? "" }),
			);
		}

		if (verifyResponse.score < 0.5) {
			throw new Error(t("errorRecapthaBot"));
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
			author: session?.user?.name ?? undefined,
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
