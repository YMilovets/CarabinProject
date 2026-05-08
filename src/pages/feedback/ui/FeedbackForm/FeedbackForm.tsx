"use client";

import React, { useActionState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Alert, Button, Paper } from "@mui/material";
import { useTranslations } from "next-intl";
import { useTimeoutWhen } from "rooks";

import { redirect } from "next/navigation";

import { AlertCard, Pages, Response } from "@/src/shared";
import { getRecaptchaToken } from "@/src/shared/utils/client";

import { containerStyle } from "../constants";

import { handleSubmit } from "./actions";
import {
	ACTION_NAME,
	initialState,
	MILLISECONDS,
	TIME_REDIRECT,
} from "./constants";
import { FeedbackFormProps, FeedbackStatus } from "./types";

function FeedbackForm({ children }: FeedbackFormProps) {
	const t = useTranslations("feedbackPage");

	const handleAction = async (
		response: Response<FeedbackStatus>,
		formData: FormData,
	) => {
		const token = await getRecaptchaToken(ACTION_NAME);
		formData.set("token", token);

		return await handleSubmit(response, formData);
	};

	const [
		{
			error,
			data: { isSuccess, message },
		},
		formAction,
		isPending,
	] = useActionState(handleAction, initialState);

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
