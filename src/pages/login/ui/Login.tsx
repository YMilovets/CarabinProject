import React from "react";
import { Theme } from "@emotion/react";
import { Box, Paper, SxProps, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { getMessages, getTranslations } from "next-intl/server";

import { Metadata } from "next";
import { redirect } from "next/navigation";

import { SignForm, SignFormControl } from "@/src/features/login";
import { authConfig, ProfileRoute } from "@/src/shared/config";

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
	const session = await getServerSession(authConfig);
	const t = await getTranslations("loginPage");

	if (session?.user) redirect(ProfileRoute);
	return (
		<section className={styles.root}>
			<Box>
				<Paper sx={containerStyle} variant="elevation">
					<Typography variant="h6">{t("formTitle")}</Typography>
					<SignForm>
						<SignFormControl />
					</SignForm>
				</Paper>
			</Box>
		</section>
	);
}

export default Login;
