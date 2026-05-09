import { Document } from "mongodb";

import { connectDB } from "../utils";

import { CollectionDataType, Status, UpdateDataType } from "./types";
import { fetchResponse } from "./utils";

export default function patchPlaces<TResponse extends Document>({
	collection,
}: CollectionDataType<TResponse>) {
	return async ({
		filter,
		update,
		result,
		error,
	}: UpdateDataType<TResponse>) => {
		const client = await connectDB(String(process.env.DB_DATABASE));

		try {
			const connection = client.db();
			const placesCollection = connection.collection<TResponse>(collection);

			await placesCollection.updateOne(filter, update);

			return fetchResponse({
				data: result,
				status: Status.Success,
			});
		} catch {
			return fetchResponse({
				data: error,
			});
		}
	};
}
