"use client";

import React, { SubmitEventHandler } from "react";
import { Alert, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

import { Form } from "@/src/shared";

import { useSignForm } from "../../hooks";

function SignForm() {
	const t = useTranslations("loginPage");
	const { errorStatus, onSubmit } = useSignForm();

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		onSubmit(formData);
	};

	return (
		<Form
			errorContainer={
				errorStatus ? (
					<Alert variant="outlined" severity="error">
						{t(errorStatus)}
					</Alert>
				) : null
			}
			onSubmit={handleSubmit}
		>
			<TextField name="email" label={t("email")} variant="outlined" required />
			<TextField
				name="password"
				label={t("password")}
				variant="outlined"
				type="password"
				required
			/>
		</Form>
	);
}

export default SignForm;
