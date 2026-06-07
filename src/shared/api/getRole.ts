import { getTranslations } from "next-intl/server";

import { NextRequest } from "next/server";

import { getUserRoleByEmail } from "./getUserRoleByEmail";
import { Status } from "./types";
import { fetchResponse, isDeniedAccess } from "./utils";

export default async function getRole(request: NextRequest) {
	const t = await getTranslations("common");
	try {
		const currentRole = await getUserRoleByEmail();

		if (await isDeniedAccess(request)) {
			return fetchResponse({
				error: t("unauthorized"),
				status: Status.Unauthorized,
			});
		}

		return fetchResponse({
			data: currentRole,
			status: Status.Success,
		});
	} catch {
		return fetchResponse({
			error: t("errorServer"),
		});
	}
}
