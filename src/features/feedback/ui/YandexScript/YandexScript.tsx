import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import Script from "next/script";

import { useGetMapQuery } from "@/src/entities/feedback";

import { YandexScriptsProps } from "./types";

function YandexScript({ onLoad, onError }: YandexScriptsProps) {
	const { data, isSuccess } = useGetMapQuery();
	const { data: code } = { ...data };

	const handleLoad = async () => {
		try {
			const [ymaps3React] = await Promise.all([
				ymaps3.import("@yandex/ymaps3-reactify"),
				ymaps3.ready,
			]);

			const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

			onLoad({ reactify, ymaps3 });
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
