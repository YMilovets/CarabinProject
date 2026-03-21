import React from "react";
import { Alert } from "@mui/material";
import { getMessages, getTranslations } from "next-intl/server";

import { Metadata } from "next";

import styles from "./NotFound.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.notFoundPage.title,
	};
}

async function NotFound() {
	const t = await getTranslations("notFoundPage");
	return (
		<section className={styles.root}>
			<Alert variant="outlined" severity="error">
				{t("alert")}
			</Alert>
		</section>
	);
}

export default NotFound;
