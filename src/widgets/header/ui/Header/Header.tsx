import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import Link from "next/link";

import { ThemeControl } from "@/src/features/main";

import ButtonLink from "../ButtonLink";
import ToolbarContainer from "../Toolbar";

import { getPages } from "./utils";

async function Header() {
	const t = await getTranslations("common");
	const pages = await getPages();

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
				<Box>
					{pages.map(({ id, value, path }) => (
						<ButtonLink path={path} key={id}>
							{value}
						</ButtonLink>
					))}
				</Box>
				<ThemeControl />
			</Toolbar>
		</ToolbarContainer>
	);
}

export default Header;
