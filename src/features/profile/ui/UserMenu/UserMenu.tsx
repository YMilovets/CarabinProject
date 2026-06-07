import React from "react";
import { CircularProgress, Divider, MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import { PrivateObserver, useGetRoleQuery } from "@/src/entities/users";
import { MenuLink } from "@/src/shared";
import { ProfileRoute, PublicationsRoute } from "@/src/shared/config/pages";

import { UserMenuProps } from "./types";

function UserMenu({ onClose }: UserMenuProps) {
	const t = useTranslations("common");
	const pT = useTranslations("profilePage");
	const pubT = useTranslations("publicationPage");

	const { isLoading } = useGetRoleQuery({});

	if (isLoading) return <CircularProgress />;
	return (
		<>
			<MenuLink key="title" onClick={onClose} href={ProfileRoute}>
				{pT("title")}
			</MenuLink>
			<MenuItem
				onClick={() => {
					onClose?.();
					signOut({ callbackUrl: "/" });
				}}
				key="exit"
			>
				{t("exit")}
			</MenuItem>
			<PrivateObserver selectedRole="admin">
				<Divider />
				<MenuLink onClick={onClose} href={PublicationsRoute}>
					{pubT("title")}
				</MenuLink>
			</PrivateObserver>
		</>
	);
}

export default UserMenu;
