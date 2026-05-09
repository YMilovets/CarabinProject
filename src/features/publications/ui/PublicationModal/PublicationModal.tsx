"use client";

import React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import { clearModal } from "@/src/entities/modal";

import { handlePublishAction } from "./actions";

function PublicationModal() {
	const isDisplayModal = useAppSelector(
		(state) => state.modalReducer.isDisplayModal,
	);
	const placeholder = useAppSelector((state) => state.modalReducer.placeholder);
	const publicationId = useAppSelector((state) => state.modalReducer.id);
	const dispatch = useAppDispatch();

	const t = useTranslations("publicationPage");

	const handleClose = () => {
		dispatch(clearModal());
	};

	const handleSubmit = async () => {
		const formData = new FormData();

		if (publicationId) {
			formData.append("id", publicationId);
		}
		await handlePublishAction(formData);
	};

	if (!isDisplayModal || !placeholder?.address) return null;
	return (
		<Dialog open={isDisplayModal} onClose={handleClose}>
			<DialogTitle>{t("dialogTitle")}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{t("dialogMessage", {
						address: placeholder.address,
					})}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus>
					{t("cancel")}
				</Button>
				<form action={handleSubmit}>
					<Button type="submit" autoFocus>
						{t("publish")}
					</Button>
				</form>
			</DialogActions>
		</Dialog>
	);
}

export default PublicationModal;
