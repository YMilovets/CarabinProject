"use client";

import React from "react";
import { useColorScheme } from "@mui/material";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import { accountBox } from "@/src/shared";

import styles from "./UserAvatar.module.css";

function UserAvatar() {
	const t = useTranslations("profilePage");
	const { mode } = useColorScheme();
	const { data } = useSession();

	const { user } = { ...data };
	const { image, name: username } = { ...user };
	const isDarkMode = mode === "dark";

	return (
		<Image
			width={128}
			height={128}
			alt={t("filePhoto", { username: username ?? "" })}
			src={image ?? accountBox}
			className={clsx(styles.image, {
				[styles.image_default]: !image && isDarkMode,
			})}
			priority
		/>
	);
}

export default UserAvatar;
