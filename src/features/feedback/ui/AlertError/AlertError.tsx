"use client";

import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslations } from "next-intl";

import { useGetMapQuery } from "@/src/entities/feedback";

function AlertError() {
	const t = useTranslations("feedbackPage");

	const { isError } = useGetMapQuery();

	if (!isError) return null;
	return (
		<Alert severity="error" variant="outlined" sx={{ alignItems: "center" }}>
			<AlertTitle>{t("error")}</AlertTitle>
			{t("errorMessage")}
		</Alert>
	);
}

export default AlertError;
