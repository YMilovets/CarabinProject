import { getTranslations } from "next-intl/server";

import { getApiURL } from "@/src/entities/catalog";
import { ADVANTAGES_PATH } from "@/src/entities/main";

import { AdvantagesResponse } from "./types";

export default async function fetchAdvantages(): Promise<AdvantagesResponse> {
	const t = await getTranslations("common");
	const advantagesURL = new URL(getApiURL());
	advantagesURL.pathname = [advantagesURL.pathname, ADVANTAGES_PATH].join("/");
	advantagesURL.searchParams.append("depth", "1");

	const response = await fetch(advantagesURL);

	if (!response.ok) {
		throw new Error(t("errorServer"));
	}

	return await response.json();
}
