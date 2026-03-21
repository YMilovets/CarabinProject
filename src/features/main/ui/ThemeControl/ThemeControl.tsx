"use client";

import React from "react";
import { Nightlight, Sunny } from "@mui/icons-material";
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";

import { useTheme } from "../../hooks";

import styles from "./ThemeControl.module.css";

function ThemeControl() {
	const { handleChange, isDarkMode } = useTheme();

	return (
		<Box sx={{ ml: "auto" }}>
			<FormGroup onChange={handleChange}>
				<FormControlLabel
					control={<Switch checked={isDarkMode} />}
					labelPlacement="start"
					label={
						<span className={styles.label}>
							{isDarkMode ? <Nightlight /> : <Sunny />}
						</span>
					}
				/>
			</FormGroup>
		</Box>
	);
}

export default ThemeControl;
