import React from "react";
import { FmdGood } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppSelector } from "@/src/app/hooks";

import { FRACTION_DIGIT } from "../YandexMapControl/constants";

function YandexMarker() {
	const [lng, lat] = useAppSelector((state) => state.mapReducer.coords);
	const t = useTranslations("feedbackPage");

	return (
		<Tooltip
			title={t("tooltip", {
				lat: lat.toFixed(FRACTION_DIGIT),
				lng: lng.toFixed(FRACTION_DIGIT),
			})}
		>
			<FmdGood fontSize="large" color="error" />
		</Tooltip>
	);
}

export default YandexMarker;
