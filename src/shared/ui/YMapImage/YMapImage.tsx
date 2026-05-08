"use client";

import React from "react";

import Image from "next/image";

import { useTheme } from "@/src/shared/hooks";

import { HEIGHT, WIDTH } from "./constants";
import { YMapImageProps } from "./types";
import getStaticYandexImageURL from "./utils";

function YMapImage({ lat, long, alt }: YMapImageProps) {
	const { isDarkMode } = useTheme();
	return (
		<Image
			alt={alt ?? ""}
			src={getStaticYandexImageURL(lat, long, isDarkMode)}
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
