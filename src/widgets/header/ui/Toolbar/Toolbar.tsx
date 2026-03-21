"use client";

import { alpha, AppBar } from "@mui/material";

import { useTheme } from "@/src/shared/hooks";

import { ToolbarProps } from "./types";

function Toolbar({ children, ...props }: ToolbarProps) {
	const { isDarkMode } = useTheme();
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
				borderColor: (theme) => theme.palette.grey[isDarkMode ? 800 : 300],
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
