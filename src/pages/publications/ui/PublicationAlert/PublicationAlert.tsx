import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslations } from "next-intl";

import { PublicationAlertProps } from "./types";

function PublicationAlert({
	children,
	headerTitle,
	...props
}: PublicationAlertProps) {
	const t = useTranslations("common");

	return (
		<Alert
			severity="error"
			variant="outlined"
			sx={{ alignItems: "center" }}
			{...props}
		>
			<AlertTitle>{headerTitle ?? t("error")}</AlertTitle>
			{children}
		</Alert>
	);
}

export default PublicationAlert;
