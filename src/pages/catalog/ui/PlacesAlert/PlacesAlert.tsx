import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslations } from "next-intl";

import { PlacesAlertProps } from "./types";

function PlacesAlert({ children }: PlacesAlertProps) {
	const t = useTranslations("common");

	return (
		<Alert severity="error" variant="outlined" sx={{ alignItems: "center" }}>
			<AlertTitle>{t("error")}</AlertTitle>
			{children}
		</Alert>
	);
}

export default PlacesAlert;
