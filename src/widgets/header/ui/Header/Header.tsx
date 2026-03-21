import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import Link from "next/link";

import { MobileMenu, Navigation } from "@/src/features/header";
import { ThemeControl } from "@/src/features/main";
import { UserProfile } from "@/src/features/profile";
import { DisplayObserver } from "@/src/shared";

import ToolbarContainer from "../Toolbar";

async function Header() {
	const t = await getTranslations("common");

	return (
		<ToolbarContainer>
			<Toolbar variant="regular">
				<Typography
					sx={{ mr: 3, color: "inherit", fontWeight: 500 }}
					component={Link}
					href="/"
					noWrap
					variant="h5"
				>
					{t("logo")}
				</Typography>
				<DisplayObserver isMobileMode={false}>
					<MobileMenu />
				</DisplayObserver>
				<DisplayObserver>
					<Navigation />
				</DisplayObserver>
				<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
					<DisplayObserver width={500}>
						<ThemeControl />
					</DisplayObserver>
					<UserProfile />
				</Box>
			</Toolbar>
		</ToolbarContainer>
	);
}

export default Header;
