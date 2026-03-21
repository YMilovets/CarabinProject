import React from "react";
import { Alert } from "@mui/material";

import styles from "./NotFound.module.css";

export const metadata = {
	title: "Страница не найдена",
};

function NotFound() {
	return (
		<section className={styles.root}>
			<Alert variant="outlined" severity="error">
				Страница не найдена
			</Alert>
		</section>
	);
}

export default NotFound;
