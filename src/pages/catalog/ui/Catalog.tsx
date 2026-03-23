import React from "react";
import { getMessages } from "next-intl/server";

import { Metadata } from "next";

import PlacesCatalog from "./PlacesCatalog";

import styles from "./Catalog.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.catalogPage.title,
	};
}

async function Catalog() {
	return (
		<section className={styles.root}>
			<PlacesCatalog />
		</section>
	);
}

export default Catalog;
