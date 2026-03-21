"use client";

import React from "react";
import { Avatar, IconButton, MenuItem } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, ProfileRoute } from "@/src/shared";
import { useMenu, useProfileId } from "@/src/shared/hooks";

import styles from "./UserProfile.module.css";

function UserProfile() {
	const { data } = useSession();

	const { anchorEl, isOpen, onClick, onClose } = useMenu();
	const { buttonId, menuId } = useProfileId();

	const pathname = usePathname();

	const t = useTranslations("common");
	const pT = useTranslations("profilePage");

	const isProfile = pathname === ProfileRoute;

	if (!data) return null;
	return (
		<Menu
			buttonRenderFn={(isBtnOpen, ariaLabel, btnId) => (
				<IconButton
					id={btnId}
					aria-label={ariaLabel}
					aria-controls={isBtnOpen ? menuId : undefined}
					aria-expanded={isBtnOpen}
					aria-haspopup
					tabIndex={-1}
					onClick={onClick}
					sx={{ p: 0.5 }}
				>
					<Avatar src={data.user?.image ?? undefined} />
				</IconButton>
			)}
			anchorEl={anchorEl}
			isOpen={isOpen}
			menuChildren={[
				<MenuItem
					onClick={onClose}
					key="title"
					selected={isProfile}
					href={ProfileRoute}
					component={Link}
				>
					{pT("title")}
				</MenuItem>,
				<MenuItem
					onClick={() => {
						onClose();
						signOut({ callbackUrl: "/" });
					}}
					key="exit"
				>
					{t("exit")}
				</MenuItem>,
			]}
			onClose={onClose}
			menuId={menuId}
			buttonId={buttonId}
			ariaLabel={t("profileMenu")}
			className={styles.menu}
		/>
	);
}

export default UserProfile;
