import { NextRequest } from "next/server";

import { getHeaders, sortDB } from "../utils";

import { PLACES_DB } from "./constants";
import getFoundedCollectionData from "./getFoundedCollectionData";
import { PlacesResponse } from "./types";

async function getResponse(request: NextRequest) {
	const {
		sortBy = "",
		sortAt,
		search = "",
		categories = [],
	} = await request.json();

	const options = "i";

	return getFoundedCollectionData<PlacesResponse>({
		collection: PLACES_DB,
		onResponse: sortDB(sortBy, sortAt),
		headers: getHeaders(),
	})({
		category: { $in: categories },
		$or: [
			{ category: { $regex: search, $options: options } },
			{ description: { $regex: search, $options: options } },
		],
		isPublished: true,
	});
}

export default getResponse;
