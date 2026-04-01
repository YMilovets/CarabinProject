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
						? "calc(3.5em + 60px) 3px 2em"
						: "7.5em 3px 2em",
					background: theme.palette.background.default,
					zIndex: 1,
					margin: "0 -3px",
				};
			}}
		>
			{children}
		</Stack>
	);
}

export default PlacesControl;
