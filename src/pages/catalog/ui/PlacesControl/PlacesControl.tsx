"use client";
import React from "react";
import { Stack } from "@mui/material";

import { PlacesControlProps } from "./types";

function PlacesControl({ children }: PlacesControlProps) {
	return (
		<Stack
			sx={(theme) => {
				return {
					top: 0,
					gap: 2,
					position: "sticky",
					display: "grid",
					padding: theme.breakpoints.down("xs")
						? "calc(3.5em + 60px) 0 2em"
						: "7.5em 0 2em",
					background: theme.palette.background.default,
				};
			}}
		>
			{children}
		</Stack>
	);
}

export default PlacesControl;
