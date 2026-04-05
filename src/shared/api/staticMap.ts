import { NextRequest, NextResponse } from "next/server";

import {
	STATIC_MAP_HEIGHT,
	STATIC_MAP_WIDTH,
	STATIC_MAP_ZOOM,
} from "./constants";
import { Status } from "./types";
import { fetchResponse } from "./utils";

export default async function redirectStaticMap({
	nextUrl: { searchParams },
}: NextRequest) {
	const lat = searchParams.get("lat");
	const long = searchParams.get("long");
	const isDarkMode = searchParams.get("isDarkMode");

	const baseURL = process.env.NEXT_PUBLIC_YNDX_MAPS_STATIC_API_URL ?? "";
	const imageURL = new URL(baseURL);

	imageURL.searchParams.append("ll", `${lat},${long}`);
	imageURL.searchParams.append(
		"size",
		`${STATIC_MAP_WIDTH},${STATIC_MAP_HEIGHT}`,
	);
	imageURL.searchParams.append("z", STATIC_MAP_ZOOM.toString());
	imageURL.searchParams.append("pt", `${lat},${long},pm2rdm`);
	imageURL.searchParams.append(
		"apikey",
		process.env.YNDX_MAPS_STATIC_API_KEY ?? "",
	);

	if (isDarkMode) {
		imageURL.searchParams.append("theme", `dark`);
	}

	try {
		const response = await fetch(imageURL);
		if (!response.ok) {
			return fetchResponse({
				status: response.status,
			});
		}

		const blob = await response.blob();

		return new NextResponse(blob, {
			headers: {
				"Content-Type": response.headers.get("Content-Type") ?? "image/png",
			},
			status: Status.Success,
		});
	} catch (error) {
		return fetchResponse({
			error: (error as Error).message,
			status: Status.ServerError,
		});
	}
}
