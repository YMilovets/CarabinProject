import { NextRequest, NextResponse } from "next/server";

import { connectDB, getHeaders } from "../utils";

import { PLACES_DB } from "./constants";
import { Status } from "./types";

export default async function getPlacesCategoriesFromDB({
	nextUrl: { searchParams },
}: NextRequest) {
	const client = await connectDB(String(process.env.DB_DATABASE));
	const search = searchParams.get("search") ?? "";
	const options = "i";

	try {
		const connection = client.db();
		const categories = connection.collection(PLACES_DB);
		const result = await categories
			.aggregate([
				{
					$match: {
						$or: [
							{ category: { $regex: search, $options: options } },
							{ description: { $regex: search, $options: options } },
						],
					},
				},
				{ $group: { _id: "$category", count: { $sum: 1 } } },
				{ $sort: { count: -1 } },
			])
			.toArray();

		return NextResponse.json(
			{ data: result, error: null },
			{ status: Status.Success, headers: getHeaders() },
		);
	} catch (error) {
		return NextResponse.json(
			{ data: [], error: (error as Error).message },
			{ status: Status.ServerError, headers: getHeaders() },
		);
	}
}
