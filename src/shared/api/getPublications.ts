import { getHeaders } from "../utils";

import { PLACES_DB } from "./constants";
import getFoundedCollectionData from "./getFoundedCollectionData";

function getResponse() {
	return getFoundedCollectionData({
		collection: PLACES_DB,
		headers: getHeaders(),
	})({
		isPublished: false,
	});
}

export default getResponse;
