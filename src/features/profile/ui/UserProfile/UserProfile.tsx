"use client";

import React from "react";
import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { useRouter } from "next/navigation";

import { ProfileRoute } from "@/src/shared";

import { useMenu, useProfileId } from "../../hooks";

import { MenuStyle } from "./constants";

function UserProfile() {
	const { data } = useSession();
	const router = useRouter();

	const { anchorEl, isOpen, onClick, onClose } = useMenu();
	const { buttonId, menuId } = useProfileId();

	const t = useTranslations("common");
	const pT = useTranslations("profilePage");

	if (!data) return null;
	return (
		<>
			<Box>
				<Tooltip
					title={t("profileSettings", { username: data.user?.name || "" })}
				>
					<IconButton
						id={buttonId}
						aria-label={t("profileMenu")}
						aria-controls={isOpen ? menuId : undefined}
						aria-expanded={isOpen}
						aria-haspopup
						tabIndex={-1}
						onClick={onClick}
						sx={{ p: 0.5 }}
					>
						<Avatar src={data.user?.image ?? undefined} />
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				open={isOpen}
				anchorEl={anchorEl}
				onClose={onClose}
				id={menuId}
				slotProps={{
					paper: {
						elevation: 0,
						sx: MenuStyle,
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem
					onClick={() => {
						onClose();
						router.push(ProfileRoute);
					}}
				>
					{pT("title")}
				</MenuItem>
				<MenuItem
					onClick={() => {
						signOut({ callbackUrl: "/" });
						onClose();
					}}
				>
					{t("exit")}
				</MenuItem>
			</Menu>
		</>
	);
}

export default UserProfile;
