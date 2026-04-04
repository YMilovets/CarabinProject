"use client";

import React from "react";
import { Alert } from "@mui/material";

import { FormProps } from "./types";

import styles from "./Form.module.css";

function Form({ children, errorStatus, onSubmit, ...props }: FormProps) {
	return (
		<form {...props} onSubmit={onSubmit} className={styles.form}>
			{children}
			{errorStatus ? (
				<Alert variant="outlined" severity="error">
					{errorStatus}
				</Alert>
			) : null}
		</form>
	);
}

export default Form;
