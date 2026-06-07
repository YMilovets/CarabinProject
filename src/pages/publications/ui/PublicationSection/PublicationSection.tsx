"use client";

import React from "react";
import { Box } from "@mui/material";

import { PublicationSectionProps } from "./types";

function PublicationSection({ children }: PublicationSectionProps) {
	return (
		<Box
			sx={(theme) => ({
				display: "grid",
				alignItems: "flex-start",
				justifyContent: "space-between",
				padding: "7.5em 3.75em",
				gridTemplateColumns: "1fr",
				pt: theme.breakpoints.down("xs") ? "calc(3.5em + 60px)" : "7.5em",
			})}
		>
			{children}
		</Box>
	);
}

export default PublicationSection;
