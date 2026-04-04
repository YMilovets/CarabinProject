import { getTranslations } from "next-intl/server";

import { connectDB, sha512 } from "../utils";

import { USERS_DB } from "./constants";
import { UserType } from "./types";

export default async function createNewUser({
	email,
	name,
	password,
	image,
	role = "user",
}: UserType) {
	const t = await getTranslations("signupPage");
	const client = await connectDB(String(process.env.DB_DATABASE));
	const connection = client.db();

	const users = connection.collection(USERS_DB);
	const existUsersByEmailOrName = await users
		.find({
			$or: [{ email: { $eq: email } }, { name: { $eq: name } }],
		})
		.toArray();
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
