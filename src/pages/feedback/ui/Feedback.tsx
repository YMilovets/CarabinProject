import React from "react";
import { Box } from "@mui/material";
import { getMessages } from "next-intl/server";

import { Metadata } from "next";

import FeedbackForm from "./FeedbackForm";
import FormControl from "./FormControl";

import styles from "./Feedback.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.feedbackPage.title,
	};
}
async function Feedback() {
	return (
		<section className={styles.root}>
			<Box>
				<FeedbackForm>
					<FormControl />
				</FeedbackForm>
			</Box>
		</section>
	);
}

export default Feedback;
