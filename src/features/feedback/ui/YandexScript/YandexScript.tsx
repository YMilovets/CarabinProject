"use client";

import React, { use, useEffect } from "react";
import ReactDOM from "react-dom";

import Script from "next/script";

import { useGetMapQuery } from "@/src/entities/feedback";
import { YMapControlContext } from "@/src/shared";

import { YandexScriptsProps } from "./types";

function YandexScript({ onError }: YandexScriptsProps) {
	const { data, isSuccess } = useGetMapQuery();
	const { data: code } = { ...data };

	const onLoad = use(YMapControlContext);

	const handleLoad = async () => {
		try {
			const [ymaps3React] = await Promise.all([
				ymaps3.import("@yandex/ymaps3-reactify"),
				ymaps3.ready,
			]);

			const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

			onLoad(reactify);
		} catch (error) {
			onError?.((error as Error).message);
		}
	};

	useEffect(() => {
		if (isSuccess) handleLoad();
	}, [isSuccess]);

	return isSuccess ? (
		<Script id="ymaps" type="text/javascript">
			{code}
		</Script>
	) : null;
}

export default YandexScript;
