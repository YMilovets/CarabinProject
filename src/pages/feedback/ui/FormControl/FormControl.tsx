import React from "react";
import { TextField, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import {
	Address,
	AlertError,
	CategoryField,
	GeoSearch,
	LatLong,
	Loader,
	YandexMap,
} from "@/src/features/feedback";

const COUNT = 200;

async function FeedbackFormControl() {
	const t = await getTranslations("feedbackPage");

	return (
		<>
			<Typography variant="h6">{t("formTitle")}</Typography>
			<CategoryField />
			<TextField
				multiline
				rows={3}
				label={t("description")}
				name="description"
				slotProps={{ htmlInput: { maxLength: COUNT } }}
				helperText={t("descriptionHelperText", { count: COUNT })}
			/>
			<Address />
			<LatLong />

			<Loader />
			<AlertError />
			<YandexMap>
				<GeoSearch />
			</YandexMap>
		</>
	);
}

export default FeedbackFormControl;
