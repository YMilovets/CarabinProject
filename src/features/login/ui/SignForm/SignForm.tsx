"use client";

import React, { SubmitEventHandler } from "react";
import { Alert } from "@mui/material";
import { useTranslations } from "next-intl";

import { useSignForm } from "../../hooks";

import { SignFormProps } from "./types";

import styles from "./SignForm.module.css";

function SignForm({ children, ...props }: SignFormProps) {
	const { onSubmit, errorStatus } = useSignForm();
	const t = useTranslations("loginPage");

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		if (e.currentTarget.password) {
			e.currentTarget.password.value = "";
		}
		onSubmit(formData);
	};

	return (
		<form {...props} onSubmit={handleSubmit} className={styles.form}>
			{children}
			{errorStatus ? (
				<Alert variant="outlined" severity="error">
					{t(errorStatus)}
				</Alert>
			) : null}
		</form>
	);
}

export default SignForm;
