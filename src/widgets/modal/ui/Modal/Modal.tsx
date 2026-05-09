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
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/src/app/hooks";
import { clearModal } from "@/src/entities/modal";

import { ModalProps } from "./types";

function Modal({
	title,
	body,
	onSubmitAction,
	confirmLabel,
	...props
}: ModalProps) {
	const isDisplayModal = useAppSelector(
		(state) => state.modalReducer.isDisplayModal,
	);
	const publicationId = useAppSelector((state) => state.modalReducer.id);

	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(clearModal());
	};

	const handleSubmit = async () => {
		const formData = new FormData();

		if (publicationId) {
			formData.append("id", publicationId);
		}
		await onSubmitAction?.(formData);
	};

	const cT = useTranslations("common");

	return (
		<Dialog onClose={handleClose} open={isDisplayModal} {...props}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{body}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus>
					{cT("cancel")}
				</Button>
				<form action={handleSubmit}>
					<Button type="submit" autoFocus>
						{confirmLabel ?? cT("confirm")}
					</Button>
				</form>
			</DialogActions>
		</Dialog>
	);
}

export default Modal;
