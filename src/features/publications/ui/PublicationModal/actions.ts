"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

import { getApiURL } from "@/src/entities/catalog";
import { PUBLICATION_API } from "@/src/shared/api";
import { getHeaders } from "@/src/shared/utils";

export async function handlePublishAction(formData: FormData) {
	const publicationId = formData.get("id");

	const cookiesStore = await cookies();

	await fetch([getApiURL(), PUBLICATION_API, publicationId].join("/"), {
		method: "PATCH",
		headers: getHeaders(["Cookie", cookiesStore.toString()]),
	});

	revalidateTag(PUBLICATION_API);
}
