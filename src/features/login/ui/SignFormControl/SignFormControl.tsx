"use server";

import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, FormControl, FormGroup, TextField } from "@mui/material";
import { getTranslations } from "next-intl/server";

async function SignFormControl() {
	const t = await getTranslations("loginPage");

	return (
		<FormControl>
			<FormGroup sx={{ gap: 2.5 }}>
				<TextField
					name="email"
					label={t("email")}
					variant="outlined"
					required
				/>
				<TextField
					name="password"
					label={t("password")}
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

export default SignFormControl;
