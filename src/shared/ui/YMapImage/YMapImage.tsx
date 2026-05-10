"use client";

import React from "react";

import Image from "next/image";

import { useTheme } from "@/src/shared/hooks";

import { HEIGHT, IMAGE_PATH, WIDTH } from "./constants";
import { YMapImageProps } from "./types";

function YMapImage({ lat, long, alt, apiURL }: YMapImageProps) {
	const { isDarkMode } = useTheme();

	const pathAPI = process.env.NEXT_PUBLIC_API_PATH ?? "";

	const imageURL = new URL(`${pathAPI}/${IMAGE_PATH}`, apiURL);

	imageURL.searchParams.append("lat", lat.toString());
	imageURL.searchParams.append("long", long.toString());
	if (isDarkMode) {
		imageURL.searchParams.append("isDarkMode", "1");
	}

	return (
		<Image
			alt={alt ?? ""}
			src={imageURL.toString()}
			sizes="100vw"
			style={{
				width: "100%",
				height: "100%",
			}}
			width={WIDTH}
			height={HEIGHT}
		/>
	);
}

export default YMapImage;
