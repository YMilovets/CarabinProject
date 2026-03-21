import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import Link from "next/link";

import { Navigation } from "@/src/features/header";
import { ThemeControl } from "@/src/features/main";
import { UserProfile } from "@/src/features/profile";

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
				<Navigation />
				<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
					<ThemeControl />
					<UserProfile />
				</Box>
			</Toolbar>
		</ToolbarContainer>
	);
}

export default Header;
