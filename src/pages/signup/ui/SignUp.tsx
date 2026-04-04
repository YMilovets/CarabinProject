import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { getMessages } from "next-intl/server";

import { Metadata } from "next";

import { SignUpForm, SignUpFormControl } from "@/src/features/signup";
import { ProfileRoute, RedirectObserver } from "@/src/shared";

import styles from "./SignUp.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.signupPage.title,
	};
}

async function SignUp() {
	return (
		<section className={styles.root}>
			<Suspense>
				<RedirectObserver to={ProfileRoute}>
					<Box>
						<SignUpForm>
							<SignUpFormControl />
						</SignUpForm>
					</Box>
				</RedirectObserver>
			</Suspense>
		</section>
	);
}

export default SignUp;
