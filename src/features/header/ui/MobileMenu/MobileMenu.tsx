"use client";

import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Divider, IconButton, MenuItem } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { ThemeControl } from "@/src/features/main";
import { Menu } from "@/src/shared";
import { useMenu, useMobile, useProfileId } from "@/src/shared/hooks";

import MenuItems from "../MenuItems";

import styles from "./MobileMenu.module.css";

function MobileMenu() {
	const isMobile = useMobile(500);

	const { data } = useSession();
	const t = useTranslations("common");

	const { anchorEl, isOpen, onClick, onClose } = useMenu();
	const { buttonId, menuId } = useProfileId();

	const isHideMobileMenu = !isMobile && !data;
	const isDisplayDivider = !!(isMobile && data);

	const menuItems = [];

	if (isMobile) {
		menuItems.push(
			<MenuItem key="theme">
				{t("themeMenu")}
				<ThemeControl />
			</MenuItem>,
		);
	}

	if (isDisplayDivider) {
		menuItems.push(<Divider key="divider" />);
	}

	if (data) {
		menuItems.push(<MenuItems key="menu" onClose={onClose} />);
	}

	if (isHideMobileMenu) return null;
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
					<MenuIcon />
				</IconButton>
			)}
			anchorEl={anchorEl}
			isOpen={isOpen}
			menuChildren={menuItems}
			onClose={onClose}
			menuId={menuId}
			buttonId={buttonId}
			horizontalTransform="left"
			anchorTransform="left"
			className={styles.menu}
		/>
	);
}

export default MobileMenu;
