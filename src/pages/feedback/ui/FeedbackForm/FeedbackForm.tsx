"use client";

import React, { useActionState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Alert, Button, Paper } from "@mui/material";
import { useTranslations } from "next-intl";
import { useTimeoutWhen } from "rooks";

import { redirect } from "next/navigation";

import { AlertCard, Pages } from "@/src/shared";

import { containerStyle } from "../constants";

import { handleSubmit } from "./actions";
import { initialState, MILLISECONDS, TIME_REDIRECT } from "./constants";
import { FeedbackFormProps } from "./types";

function FeedbackForm({ children }: FeedbackFormProps) {
	const [
		{
			error,
			data: { isSuccess, message },
		},
		formAction,
		isPending,
	] = useActionState(handleSubmit, initialState);
	const t = useTranslations("feedbackPage");

	useTimeoutWhen(
		() => {
			redirect(Pages.Catalog);
		},
		TIME_REDIRECT,
		!!isSuccess,
	);

	if (isSuccess) {
		return (
			<AlertCard
				title={t("successSendPlaceTitle")}
				body={message}
				controlComponents={
					<Button onClick={() => redirect(Pages.Catalog)}>
						{t("redirectCatalog")}
					</Button>
				}
			>
				{t("redirectAlert", { seconds: TIME_REDIRECT / MILLISECONDS })}
			</AlertCard>
		);
	}

	return (
		<Paper
			action={formAction}
			component="form"
			sx={containerStyle}
			variant="elevation"
		>
			{error && (
				<Alert variant="outlined" severity="error">
					{error}
				</Alert>
			)}
			{children}
			<Button
				sx={{ borderRadius: 2 }}
				endIcon={<SendIcon />}
				size="large"
				variant="contained"
				type="submit"
				disabled={isPending}
			>
				{t("submit")}
			</Button>
		</Paper>
	);
}

export default FeedbackForm;
