import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { getAuthorization } from "@/src/features/login/api";

export const authConfig: AuthOptions = {
	providers: [
		Credentials({
			credentials: {
				email: {
					label: "email",
					type: "email",
					required: true,
				},
				password: {
					label: "password",
					type: "password",
					required: true,
				},
			},
			authorize: getAuthorization,
		}),
	],
	pages: {
		signIn: "/login",
	},
};
