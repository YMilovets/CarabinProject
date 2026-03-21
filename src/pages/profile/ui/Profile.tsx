import React from "react";
import { Theme } from "@emotion/react";
import { Box, Link, SxProps, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import { UserAvatar } from "@/src/features/profile";
import { authConfig } from "@/src/shared/config";

import styles from "./Profile.module.css";

export async function generateMetadata() {
	const session = await getServerSession(authConfig);
	const { user } = { ...session };
	const { name } = { ...user };
	return {
		title: name,
	};
}

const containerStyle: SxProps<Theme> = {
	display: "flex",
	borderRadius: 5,
	gap: 7,
	p: 0,
	flexWrap: "wrap",
};

async function Profile() {
	const session = await getServerSession(authConfig);
	const t = await getTranslations("profilePage");

	const { user } = { ...session };
	const { name, email } = { ...user };
	const username = name ?? "";

	return (
		<Box className={styles.root}>
			<Box sx={containerStyle}>
				<UserAvatar />
				<Box sx={{ gap: 1, display: "grid" }}>
					<Typography variant="h2">{t("header", { username })}</Typography>
					<Typography variant="body1">
						{t("email")}:{" "}
						<Link target="_blank" href={`mailto:${email}`}>
							{email}
						</Link>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Profile;
