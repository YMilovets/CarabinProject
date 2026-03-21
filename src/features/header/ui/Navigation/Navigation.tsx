"use client";

import React from "react";
import { Box } from "@mui/material";

import { usePathname } from "next/navigation";

import { useRoutes } from "../../hooks";
import ButtonLink from "../ButtonLink";

function Navigation() {
	const routes = useRoutes();
	const pathname = usePathname();

	return (
		<Box>
			{routes.map(({ id, value, path }) => {
				const isCurrent = pathname?.replace("/", "") === path;
				return (
					<ButtonLink
						variant={isCurrent ? "outlined" : "text"}
						path={path}
						key={id}
					>
						{value}
					</ButtonLink>
				);
			})}
		</Box>
	);
}

export default Navigation;
