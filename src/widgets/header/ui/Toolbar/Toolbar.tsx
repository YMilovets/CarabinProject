"use client";

import { alpha, AppBar, useColorScheme } from "@mui/material";

import { ToolbarProps } from "./types";

function Toolbar({ children }: ToolbarProps) {
	const { mode } = useColorScheme();
	const isDarkMode = mode === "dark";
	return (
		<AppBar
			sx={{
				boxShadow: "none",
				backdropFilter: "blur(0.5em)",
				backgroundColor: (theme) =>
					alpha(theme.palette.background.default, 0.8),
				borderWidth: 0,
				borderBottom: 1,
				borderStyle: "solid",
				borderColor: (theme) => theme.palette.grey[isDarkMode ? 800 : 300],
				pl: 7.5,
				pr: 7.5,
			}}
			color="default"
		>
			{children}
		</AppBar>
	);
}

export default Toolbar;
