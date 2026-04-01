"use client";

import SendIcon from "@mui/icons-material/Send";
import { Button, Paper } from "@mui/material";
import { useTranslations } from "next-intl";

import { containerStyle } from "../constants";

import { FeedbackFormProps } from "./types";

function FeedbackForm({ children }: FeedbackFormProps) {
	const t = useTranslations("feedbackPage");
	return (
		<Paper component="form" sx={containerStyle} variant="elevation">
			{children}
			<Button
				sx={{ borderRadius: 2 }}
				endIcon={<SendIcon />}
				size="large"
				variant="contained"
				type="submit"
			>
				{t("submit")}
			</Button>
		</Paper>
	);
}

export default FeedbackForm;
