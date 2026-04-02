"use server";

import React from "react";

import { YMapProvider } from "@/src/shared";

import YandexMapControl from "../YandexMapControl";
import YandexScript from "../YandexScript";

import { YandexMapProps } from "./types";

function YandexMap({ children }: YandexMapProps) {
	return (
		<YMapProvider>
			{children}
			<YandexScript />
			<YandexMapControl />
		</YMapProvider>
	);
}

export default YandexMap;
