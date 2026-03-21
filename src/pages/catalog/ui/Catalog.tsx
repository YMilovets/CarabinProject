import React from "react";
import { Alert } from "@mui/material";

import { Metadata } from "next";

import styles from "./Catalog.module.css";

export const metadata: Metadata = {
	title: "Каталог адресов",
};

function Catalog() {
	return (
		<section className={styles.root}>
			<Alert variant="outlined" severity="warning">
				Раздел {metadata.title?.toString()} в приложении КАРАБИН находится в
				разработке
			</Alert>
		</section>
	);
}

export default Catalog;
