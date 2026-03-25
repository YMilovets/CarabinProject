import React from "react";
import { Box } from "@mui/material";
import { getMessages } from "next-intl/server";

import { Metadata } from "next";

import {
	PlacesCategories,
	PlacesSearch,
	PlacesSort,
} from "@/src/features/catalog";

import PlacesCatalog from "./PlacesCatalog";
import PlacesControl from "./PlacesControl";

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
			<PlacesControl>
				<Box sx={{ display: "flex", gap: 2 }}>
					<PlacesSearch />
					<PlacesSort />
				</Box>
				<PlacesCategories />
			</PlacesControl>
			<PlacesCatalog />
		</section>
	);
}

export default Catalog;
