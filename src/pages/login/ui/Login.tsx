import React from "react";
import { Theme } from "@emotion/react";
import { Box, Paper, SxProps, Typography } from "@mui/material";

import { LoginForm } from "@/src/features/login";

import styles from "./Login.module.css";

const containerStyle: SxProps<Theme> = {
	borderRadius: 3,
	display: "grid",
	gap: 2,
	padding: 2.5,
};

export const metadata = {
	title: "Войти в систему",
};

function Login() {
	return (
		<section className={styles.root}>
			<Box>
				<Paper sx={containerStyle} variant="elevation">
					<Typography variant="h6">Войти в систему</Typography>
					<LoginForm />
				</Paper>
			</Box>
		</section>
	);
}

export default Login;
