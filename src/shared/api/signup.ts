import { getTranslations } from "next-intl/server";

import { connectDB, sha512 } from "../utils";

import { USERS_DB } from "./constants";
import { UserType } from "./types";
import { verifyRecaptchaToken } from "./utils";

export default async function createNewUser({
	email,
	name,
	password,
	image,
	token,
	role = "user",
}: UserType) {
	const t = await getTranslations("signupPage");
	const client = await connectDB(String(process.env.DB_DATABASE));
	const verifyResponse = await verifyRecaptchaToken(token);
	const connection = client.db();

	const users = connection.collection(USERS_DB);
	const existUsersByEmailOrName = await users
		.find({
			$or: [{ email: { $eq: email } }, { name: { $eq: name } }],
		})
		.toArray();

	if (!verifyResponse.success) {
		throw new Error(
			t("errorRecapthaCode", { email: process.env.NEXT_PUBLIC_EMAIL ?? "" }),
		);
	}

	if (verifyResponse.score < 0.5) {
		throw new Error(t("errorRecapthaBot"));
	}

	if (existUsersByEmailOrName.length > 0) {
		throw new Error(t("errorExistUsernameOrEmail"));
	}

	await users.insertOne({
		name,
		email,
		password_hash: sha512(password),
		image,
		role,
	});
}
