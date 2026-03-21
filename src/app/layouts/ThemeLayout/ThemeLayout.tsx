"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ThemeLayoutProps } from "./types";

const theme = createTheme({
	colorSchemes: {
		dark: true,
		light: true,
	},
});

function ThemeLayout({ children }: ThemeLayoutProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default ThemeLayout;
