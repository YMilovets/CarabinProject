import { Filter } from "mongodb";
import { getTranslations } from "next-intl/server";

import { NextResponse } from "next/server";

import { connectDB } from "../utils";

import { CollectionDataType, Status } from "./types";

function getFoundedCollectionData<TResponse extends Document>({
	collection,
	errorData = [],
	notFoundData = [],
	onSuccess = (data) => data,
	onResponse = (data) => data,
}: CollectionDataType<TResponse>) {
	return async (filter: Filter<TResponse> = {}) => {
		const client = await connectDB(String(process.env.DB_DATABASE));
		const t = await getTranslations("common");

		try {
			const connection = client.db();
			const scripts = connection.collection<TResponse>(collection);
			const response = await onResponse(scripts.find(filter)).toArray();

			if (response.length === 0) {
				return NextResponse.json(
					{ data: notFoundData, error: t("notFound") },
					{ status: Status.NotFound },
				);
			}

			return NextResponse.json(
				{ data: onSuccess(response), error: null },
				{ status: Status.Success },
			);
		} catch (error) {
			return NextResponse.json(
				{ data: errorData, error: (error as Error).message },
				{ status: Status.ServerError },
			);
		} finally {
			client.close();
		}
	};
}

export default getFoundedCollectionData;
