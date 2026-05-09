import React from "react";
import { getMessages } from "next-intl/server";

import { Metadata } from "next";

import { PublicationModal } from "@/src/features/publications";

import PublicationList from "./PublicationList";

import styles from "./Publications.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.publicationPage.title,
	};
}

function Publications() {
	return (
		<section className={styles.root}>
			<PublicationList />
			<PublicationModal />
		</section>
	);
}

export default Publications;
