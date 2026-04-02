"use client";

import { alpha, AppBar } from "@mui/material";

import { ToolbarProps } from "./types";

function Toolbar({ children, ...props }: ToolbarProps) {
	return (
		<AppBar
			{...props}
			sx={{
				boxShadow: "none",
				backdropFilter: "blur(0.5em)",
				backgroundColor: (theme) =>
					alpha(theme.palette.background.default, 0.8),
				borderWidth: 0,
				borderBottom: 1,
				borderStyle: "solid",
				borderColor: (theme) =>
					theme.palette.grey[theme.palette.mode === "dark" ? 800 : 300],
				pl: "3.75em",
				pr: "3.75em",
			}}
			color="default"
		>
			{children}
		</AppBar>
	);
}

export default Toolbar;
