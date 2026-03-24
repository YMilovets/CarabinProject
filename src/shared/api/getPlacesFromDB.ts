import { NextRequest } from "next/server";

import { SortOrder } from "../types";
import { getHeaders, sortDB } from "../utils";

import { PLACES_DB } from "./constants";
import getFoundedCollectionData from "./getFoundedCollectionData";
import { PlacesResponse } from "./types";

function getResponse({ nextUrl: { searchParams } }: NextRequest) {
	const search = searchParams.get("search") ?? "";
	const sortBy = searchParams.get("sortBy") ?? "";
	const sortAt = Number(searchParams.get("sortAt") ?? SortOrder.Default);

	const options = "i";

	return getFoundedCollectionData<PlacesResponse>({
		collection: PLACES_DB,
		onResponse: sortDB(sortBy, sortAt),
		headers: getHeaders(),
	})({
		$or: [
			{ category: { $regex: search, $options: options } },
			{ description: { $regex: search, $options: options } },
		],
		isPublished: true,
	});
}

export default getResponse;
