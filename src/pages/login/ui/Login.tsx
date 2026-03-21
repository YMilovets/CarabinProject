import React from "react";
import { Theme } from "@emotion/react";
import { Box, Paper, SxProps, Typography } from "@mui/material";
import { getMessages, getTranslations } from "next-intl/server";

import { Metadata } from "next";

import { SignForm, SignFormSuspense } from "@/src/features/login";

import styles from "./Login.module.css";

const containerStyle: SxProps<Theme> = {
	borderRadius: 3,
	display: "grid",
	gap: 2,
	padding: 2.5,
};

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.loginPage.title,
	};
}

async function Login() {
	const t = await getTranslations("loginPage");
	return (
		<section className={styles.root}>
			<Box>
				<Paper sx={containerStyle} variant="elevation">
					<Typography variant="h6">{t("formTitle")}</Typography>
					<SignFormSuspense>
						<SignForm />
					</SignFormSuspense>
				</Paper>
			</Box>
		</section>
	);
}

export default Login;
