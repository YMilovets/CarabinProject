"use client";

import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { useGetRoleQuery } from "@/src/entities/users";
import { Menu } from "@/src/shared";
import { useMenu, useProfileId } from "@/src/shared/hooks";

import UserMenu from "../UserMenu";

import styles from "./UserProfile.module.css";

function UserProfile() {
	const { data } = useSession();

	const { anchorEl, isOpen, onClick, onClose } = useMenu();
	const { buttonId, menuId } = useProfileId();

	const { user } = { ...data };
	const { image } = { ...user };

	const t = useTranslations("common");

	useGetRoleQuery({});

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
					<Avatar src={image ?? undefined} />
				</IconButton>
			)}
			anchorEl={anchorEl}
			isOpen={isOpen}
			menuChildren={[<UserMenu key="menu" onClose={onClose} />]}
			onClose={onClose}
			menuId={menuId}
			buttonId={buttonId}
			ariaLabel={t("profileMenu")}
			className={styles.menu}
		/>
	);
}

export default UserProfile;
