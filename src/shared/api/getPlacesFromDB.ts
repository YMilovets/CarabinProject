import { NextRequest } from "next/server";

import { SortOrder } from "@/src/shared/api/types";

import { PLACES_DB } from "./constants";
import getFoundedCollectionData from "./getFoundedCollectionData";
import sortPlacesData from "./sortPlacesData";
import { PlacesResponse } from "./types";

function getResponse({ nextUrl: { searchParams } }: NextRequest) {
	const search = searchParams.get("search") ?? "";
	const sortBy = searchParams.get("sortBy") ?? "";
	const sortAt = Number(searchParams.get("sortAt") ?? SortOrder.Default);

	const options = "i";

	return getFoundedCollectionData<PlacesResponse>({
		collection: PLACES_DB,
		onResponse: sortPlacesData(sortBy, sortAt),
	})({
		$or: [
			{ category: { $regex: search, $options: options } },
			{ description: { $regex: search, $options: options } },
		],
		isPublished: true,
	});
}

export default getResponse;
