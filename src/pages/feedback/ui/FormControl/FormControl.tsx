import React from "react";
import { Alert, AlertTitle, TextField, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { Address, YandexMap } from "@/src/features/feedback";
import LatLong from "@/src/features/feedback/ui/LatLong";

const COUNT = 200;

async function FeedbackFormControl() {
	const t = await getTranslations("feedbackPage");

	return (
		<>
			<Typography variant="h6">{t("formTitle")}</Typography>
			<TextField label={t("objectCategory")} name="category" />
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
			<YandexMap
				titleComponent={<Typography variant="body1">{t("mapInfo")}</Typography>}
				errorComponent={
					<Alert
						severity="error"
						variant="outlined"
						sx={{ alignItems: "center" }}
					>
						<AlertTitle>{t("error")}</AlertTitle>
						{t("errorMessage")}
					</Alert>
				}
			/>
		</>
	);
}

export default FeedbackFormControl;
