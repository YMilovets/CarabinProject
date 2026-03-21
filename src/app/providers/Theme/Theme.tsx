"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ThemeProps } from "./types";

const theme = createTheme({
	colorSchemes: {
		dark: true,
		light: true,
	},
	components: {
		MuiToolbar: {
			styleOverrides: {
				root: {
					"@media (min-width: 0px)": {
						paddingLeft: 0,
						paddingRight: 0,
					},
				},
			},
		},
	},
});

function Theme({ children }: ThemeProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default Theme;
