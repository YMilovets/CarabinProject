"use client";

import React, { SubmitEvent } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, FormControl, FormGroup } from "@mui/material";

import { FormProps } from "./types";

import styles from "./Form.module.css";

function Form({
	onSubmit,
	children,
	sendBtnTitle = "Отправить",
	...props
}: FormProps) {
	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit?.(e);
	};

	return (
		<form {...props} onSubmit={handleSubmit} className={styles.form}>
			<FormControl>
				<FormGroup sx={{ gap: 2.5 }}>
					{children}
					<Button
						sx={{ borderRadius: 2 }}
						endIcon={<SendIcon />}
						size="large"
						variant="contained"
						type="submit"
					>
						{sendBtnTitle}
					</Button>
				</FormGroup>
			</FormControl>
		</form>
	);
}

export default Form;
