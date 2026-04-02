"use client";

import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Divider, IconButton, MenuItem } from "@mui/material";
import { useTranslations } from "next-intl";

import { ThemeControl } from "@/src/features/main";
import { DisplayObserver, Menu } from "@/src/shared";
import { useMenu, useProfileId } from "@/src/shared/hooks";

import MenuItems from "../MenuItems";

import styles from "./MobileMenu.module.css";

function MobileMenu() {
	const t = useTranslations("common");

	const { anchorEl, isOpen, onClick, onClose } = useMenu();
	const { buttonId, menuId } = useProfileId();

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
			menuChildren={[
				<DisplayObserver isMobileMode={false} width={500} key="mobile">
					<MenuItem key="theme">
						{t("themeMenu")}
						<ThemeControl />
					</MenuItem>
					<Divider key="divider" />
				</DisplayObserver>,
				<MenuItems key="menu" onClose={onClose} />,
			]}
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
