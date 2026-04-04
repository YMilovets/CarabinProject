"use client";

import React, { useActionState } from "react";
import { Button, Paper, SxProps, Theme, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useTimeoutWhen } from "rooks";

import { redirect } from "next/navigation";

import { AlertCard, Form, Pages } from "@/src/shared";

import { handleSubmit } from "./actions";
import { initialState, MILLISECONDS, TIME_REDIRECT, WAIT } from "./constants";
import { SignUpFormProps } from "./types";
import { getRecaptchaToken } from "./utils";

function SignUpForm({ children }: SignUpFormProps) {
	const t = useTranslations("signupPage");

	const handleSignIn = async (_: unknown, formData: FormData) => {
		try {
			const token = await getRecaptchaToken();

			formData.set("token", token);

			return await handleSubmit(formData);
		} catch (error) {
			return { error: (error as Error).message, data: null };
		}
	};

	const [{ data, error }, handleAction] = useActionState(
		handleSignIn,
		initialState,
	);

	useTimeoutWhen(() => redirect(Pages.Login), WAIT, !!data);

	const containerStyle: SxProps<Theme> = {
		borderRadius: 3,
		display: "grid",
		gap: 2,
		padding: 2.5,
		margin: 2,
		maxWidth: "25rem",
	};

	if (data) {
		return (
			<AlertCard
				title={t("successAccountTitle")}
				body={data}
				controlComponents={
					<Button onClick={() => redirect(Pages.Login)}>
						{t("redirectLogin")}
					</Button>
				}
			>
				{t("redirectAlert", { seconds: TIME_REDIRECT / MILLISECONDS })}
			</AlertCard>
		);
	}
	return (
		<Paper sx={containerStyle} variant="elevation">
			<Typography variant="h6">{t("signupTitle")}</Typography>
			<Form errorStatus={error} action={handleAction}>
				{children}
			</Form>
		</Paper>
	);
}

export default SignUpForm;
