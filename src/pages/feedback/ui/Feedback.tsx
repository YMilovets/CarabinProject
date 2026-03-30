import React from "react";
import { Box, Paper } from "@mui/material";
import { getMessages } from "next-intl/server";

import { Metadata } from "next";

import { containerStyle } from "./constants";
import FeedbackForm from "./FeedbackForm";

import styles from "./Feedback.module.css";

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();

	return {
		title: messages.feedbackPage.title,
	};
}

const handleSubmit = async (formData: FormData) => {
	"use server";
	console.log(formData);
};

async function Feedback() {
	return (
		<section className={styles.root}>
			<Box>
				<Paper
					action={handleSubmit}
					component="form"
					sx={containerStyle}
					variant="elevation"
				>
					<FeedbackForm />
				</Paper>
			</Box>
		</section>
	);
}

export default Feedback;
