"use server";
import { getTranslations } from "next-intl/server";

import { Response, sendNewPlace } from "@/src/shared/api";

import { FeedbackStatus } from "./types";

export async function handleSubmit(
	_: Response<FeedbackStatus>,
	formData: FormData,
): Promise<Response<FeedbackStatus>> {
	const t = await getTranslations("feedbackPage");

	try {
		const address = formData.get("address")?.toString();
		const category = formData.get("category")?.toString();
		const description = formData.get("description")?.toString();
		const lat = formData.get("lat")?.toString();
		const long = formData.get("long")?.toString();
		const token = formData.get("token")?.toString();

		if (!category?.trim()) {
			throw new Error(t("errorPlaceCategory"));
		}

		if (!address?.trim()) {
			throw new Error(t("errorPlaceAddress"));
		}

		if (!lat?.trim()) {
			throw new Error(t("errorPlaceLngLat"));
		}

		if (!long?.trim()) {
			throw new Error(t("errorPlaceLngLat"));
		}

		if (!token) {
			throw new Error(
				t("errorRecapthaCode", {
					email: process.env.NEXT_PUBLIC_EMAIL ?? "",
				}),
			);
		}

		const parseFloatLat = typeof lat === "number" ? lat : parseFloat(lat);
		const parseFloatLong = typeof long === "number" ? long : parseFloat(long);

		await sendNewPlace({
			address,
			category,
			description,
			lat: parseFloatLat,
			long: parseFloatLong,
			token,
		});
		return {
			data: { message: t("successSendPlace"), isSuccess: true },
			error: null,
		};
	} catch (error) {
		return {
			data: { message: (error as Error).message },
			error: (error as Error).message,
		};
	}
}
