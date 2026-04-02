import { connectDB, sha512 } from "@/src/shared/utils";

import { UserRowType } from "./types";

const USER_COLLECTION = "users";

async function getAuthorization(
	credentials?: Record<"email" | "password", string>,
) {
	const { email: credentialEmail, password: credentialPassword } = {
		...credentials,
	};

	const client = await connectDB(String(process.env.DB_DATABASE));

	try {
		const connection = client.db();
		await connection.createCollection(USER_COLLECTION);
		const users = connection.collection(USER_COLLECTION);

		const result = await users.findOne<UserRowType>({
			email: credentialEmail?.trim(),
		});

		if (!result) return null;
		const { _id: id, email, name, password_hash: password, image } = result;

		if (credentialPassword?.trim() && password === sha512(credentialPassword)) {
			return { id, email, name, image };
		}

		return null;
	} catch {
		return null;
	} finally {
		client.close();
	}
}

export default getAuthorization;
