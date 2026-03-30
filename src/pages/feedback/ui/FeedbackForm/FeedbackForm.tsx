import React from "react";
import SendIcon from "@mui/icons-material/Send";
import {
	Alert,
	AlertTitle,
	Button,
	TextField,
	Typography,
} from "@mui/material";
import { getTranslations } from "next-intl/server";

import { YandexMap } from "@/src/features/feedback";

async function FeedbackForm() {
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
			/>
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
			<Button
				sx={{ borderRadius: 2 }}
				endIcon={<SendIcon />}
				size="large"
				variant="contained"
				type="submit"
			>
				{t("submit")}
			</Button>
		</>
	);
}

export default FeedbackForm;
