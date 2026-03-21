import React from "react";
import { Alert } from "@mui/material";
import { getMessages, getTranslations } from "next-intl/server";

import { Metadata } from "next";

import styles from "./Catalog.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.catalogPage.title,
	};
}

async function Catalog() {
	const t = await getTranslations("common");
	const subT = await getTranslations("catalogPage");

	return (
		<section className={styles.root}>
			<Alert variant="outlined" severity="warning">
				{t("alert", { page: subT("title") })}
			</Alert>
		</section>
	);
}

export default Catalog;
