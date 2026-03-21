import React from "react";
import { Alert } from "@mui/material";
import { getTranslations } from "next-intl/server";

import styles from "./Main.module.css";

async function Main() {
	const t = await getTranslations("mainPage");

	return (
		<section className={styles.root}>
			<Alert variant="outlined" severity="warning">
				{t("alert")}
			</Alert>
		</section>
	);
}

export default Main;
