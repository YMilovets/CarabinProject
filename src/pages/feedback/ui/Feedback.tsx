import React from "react";
import { Alert } from "@mui/material";
import { getMessages, getTranslations } from "next-intl/server";

import { Metadata } from "next";

import styles from "./Feedback.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.feedbackPage.title,
	};
}

async function Editor() {
	const t = await getTranslations("common");
	const subT = await getTranslations("feedbackPage");

	return (
		<section className={styles.root}>
			<Alert variant="outlined" severity="warning">
				{t("alert", { page: subT("title") })}
			</Alert>
		</section>
	);
}

export default Editor;
