"use client";

import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

import { useGetMapQuery } from "@/src/entities/feedback";

import GeoSearch from "../GeoSearch";
import YandexMapControl from "../YandexMapControl";
import YandexScript from "../YandexScript";

import { SDKType, YandexMapProps } from "./types";

function YandexMap({ titleComponent, errorComponent }: YandexMapProps) {
	const [sdk, setSdk] = useState<SDKType>();
	const { isLoading, isSuccess, isError } = useGetMapQuery();

	const { reactify } = { ...sdk };

	return (
		<>
			{isSuccess && titleComponent}
			{isError && errorComponent}
			<YandexScript onLoad={setSdk} />
			{isLoading && <CircularProgress key="loader" />}
			{isSuccess && <GeoSearch />}
			<YandexMapControl reactify={reactify} />
		</>
	);
}

export default YandexMap;
