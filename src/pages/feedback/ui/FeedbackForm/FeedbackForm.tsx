import React from "react";
import SendIcon from "@mui/icons-material/Send";
import {
	Button,
	TextField,
	Typography,
} from "@mui/material";
import { getTranslations } from "next-intl/server";

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
