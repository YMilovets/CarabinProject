import React from "react";
import { Box, Container, Toolbar, Typography } from "@mui/material";

import Link from "next/link";

import ButtonLink from "../ButtonLink";
import ToolbarContainer from "../Toolbar";

import { pages } from "./constants";

function Header() {
	return (
		<ToolbarContainer>
			<Container maxWidth="xl">
				<Toolbar variant="regular">
					<Typography
						sx={{ mr: 3, color: "inherit", fontWeight: 500 }}
						component={Link}
						href="/"
						noWrap
						variant="h5"
					>
						PROJECT
					</Typography>
					<Box>
						{pages.map(({ id, value, path }) => (
							<ButtonLink path={path} key={id}>
								{value}
							</ButtonLink>
						))}
					</Box>
				</Toolbar>
			</Container>
		</ToolbarContainer>
	);
}

export default Header;
