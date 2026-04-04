import React, { Suspense } from "react";
import { Theme } from "@emotion/react";
import { Box, Paper, SxProps, Typography } from "@mui/material";
import { getMessages, getTranslations } from "next-intl/server";

import { Metadata } from "next";

import {
	RedirectObserver,
	SignForm,
	SignFormControl,
} from "@/src/features/login";
import { ProfileRoute } from "@/src/shared/config";

import styles from "./Login.module.css";

const containerStyle: SxProps<Theme> = {
	borderRadius: 3,
	display: "grid",
	gap: 2,
	padding: 2.5,
	margin: 2,
	maxWidth: "17.5rem",
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
			<Suspense>
				<RedirectObserver to={ProfileRoute}>
					<Box>
						<Paper sx={containerStyle} variant="elevation">
							<Typography variant="h6">{t("formTitle")}</Typography>
							<SignForm>
								<SignFormControl />
							</SignForm>
						</Paper>
					</Box>
				</RedirectObserver>
			</Suspense>
		</section>
	);
}

export default Login;
