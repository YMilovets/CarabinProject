import { getServerSession } from "next-auth";

import { authConfig } from "../config";
import { connectDB } from "../utils";

import { USERS_DB } from "./constants";
import { UserType } from "./types";

export async function getUserRoleByEmail() {
	const session = await getServerSession(authConfig);
	const { user } = { ...session };
	const { email } = { ...user };

	const client = await connectDB(String(process.env.DB_DATABASE));

	try {
		const connection = client.db();
		const users = connection.collection(USERS_DB);

		const response = await users.findOne<UserType>(
			{
				email,
			},
			{
				projection: {
					password_hash: 0,
				},
			},
		);

		return response?.role;
	} finally {
		await client.close();
	}
}
