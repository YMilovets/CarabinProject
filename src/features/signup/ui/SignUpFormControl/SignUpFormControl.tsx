"use server";

import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, FormControl, FormGroup, TextField } from "@mui/material";
import { getTranslations } from "next-intl/server";

async function SignUpFormControl() {
	const t = await getTranslations("signupPage");

	return (
		<FormControl>
			<FormGroup sx={{ gap: 2.5 }}>
				<TextField name="name" label={t("name")} variant="outlined" required />
				<TextField
					name="email"
					label={t("email")}
					variant="outlined"
					type="email"
					required
				/>
				<TextField
					name="password"
					label={t("password")}
					variant="outlined"
					type="password"
					required
				/>
				<TextField
					name="repeatPassword"
					label={t("repeatPassword")}
					variant="outlined"
					type="password"
					required
				/>
				<Button
					sx={{ borderRadius: 2 }}
					endIcon={<SendIcon />}
					size="large"
					variant="contained"
					type="submit"
				>
					{t("buttonTitle")}
				</Button>
			</FormGroup>
		</FormControl>
	);
}

export default SignUpFormControl;
