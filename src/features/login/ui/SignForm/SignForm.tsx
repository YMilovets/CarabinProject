"use client";

import React, { SubmitEventHandler } from "react";

import { Form } from "@/src/shared";

import { useSignForm } from "../../hooks";

import { SignFormProps } from "./types";

function SignForm({ children, ...props }: SignFormProps) {
	const { onSubmit, errorStatus } = useSignForm();

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		if (e.currentTarget.password) {
			e.currentTarget.password.value = "";
		}
		onSubmit(formData);
	};

	return (
		<Form {...props} errorStatus={errorStatus} onSubmit={handleSubmit}>
			{children}
		</Form>
	);
}

export default SignForm;
