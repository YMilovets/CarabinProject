"use server";

import { getTranslations } from "next-intl/server";

import { Response } from "@/src/shared/api";

import { MAX_HEIGHT_PASSWORD } from "./constants";

export async function handleSubmit(
	formData: FormData,
): Promise<Response<string | null>> {
	const t = await getTranslations("signupPage");

	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	const repeatPassword = formData.get("repeatPassword");

	try {
		if (password !== repeatPassword) {
			throw new Error(t("errorComparePasswords"));
		}

		if (!password?.toString().trim()) {
			throw new Error(t("errorUserPassword"));
		}

		if (password.toString().length < MAX_HEIGHT_PASSWORD) {
			throw new Error(
				t("errorSmallPassword", { countChar: MAX_HEIGHT_PASSWORD }),
			);
		}

		if (!name?.toString().trim()) {
			throw new Error(t("errorUserName"));
		}

		if (!email?.toString().trim()) {
			throw new Error(t("errorUserEmail"));
		}

		return { error: null, data: t("successAccountMessage") };
	} catch (error) {
		return { error: (error as Error).message, data: null };
	}
}
