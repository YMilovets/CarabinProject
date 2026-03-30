"use client";

import React, { ChangeEventHandler, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import { Reactify } from "@yandex/ymaps3-types/reactify";
import { useTranslations } from "next-intl";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import { setAddress, useGetMapQuery } from "@/src/entities/feedback";

import YandexMapControl from "../YandexMapControl";
import YandexScript from "../YandexScript";

import { YandexMapProps } from "./types";

function YandexMap({ titleComponent, errorComponent }: YandexMapProps) {
	const [sdk, setSdk] = useState<{
		reactify: Reactify;
		ymaps3: typeof ymaps3;
	}>();
	const address = useAppSelector((state) => state.mapReducer.address);
	const [lng, lat] = useAppSelector((state) => state.mapReducer.coords);
	const { isLoading, isSuccess, isError } = useGetMapQuery();
	const t = useTranslations("feedbackPage");
	const dispatch = useAppDispatch();

	const handleChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement,
		Element
	> = (e) => {
		e.preventDefault();
		dispatch(setAddress(e.target.value));
	};

	return (
		<>
			<TextField
				name="address"
				value={address ?? ""}
				label={t("selectedAddress")}
				onChange={handleChange}
				multiline
			/>
			{isSuccess && titleComponent}
			{isError && errorComponent}
			<YandexScript onLoad={setSdk} />
			{isLoading && <CircularProgress key="loader" />}

			<YandexMapControl reactify={sdk?.reactify} />
			<TextField
				name="lat"
				defaultValue={lat}
				sx={{ display: "none" }}
				hidden={true}
			/>
			<TextField
				name="lng"
				defaultValue={lng}
				sx={{ display: "none" }}
				hidden={true}
			/>
		</>
	);
}

export default YandexMap;
