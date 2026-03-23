import { NextRequest } from "next/server";

import { PLACES_DB } from "./constants";
import getFoundedCollectionData from "./getFoundedCollectionData";
import { PlacesResponse } from "./types";

function getResponse({ nextUrl: { searchParams } }: NextRequest) {
	const search = searchParams.get("search") ?? "";
	const options = "i";

	return getFoundedCollectionData<PlacesResponse>({
		collection: PLACES_DB,
	})({
		$or: [
			{ category: { $regex: search, $options: options } },
			{ description: { $regex: search, $options: options } },
		],
		isPublished: true,
	});
}

export default getResponse;
