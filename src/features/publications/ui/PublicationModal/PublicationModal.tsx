"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { useAppSelector } from "@/src/app/hooks";
import { Modal } from "@/src/widgets/modal";

import { handlePublishAction } from "./actions";

function PublicationModal() {
	const placeholder = useAppSelector((state) => state.modalReducer.placeholder);

	const t = useTranslations("publicationPage");

	const handleSubmit = async (formData: FormData) => {
		await handlePublishAction(formData);
	};

	if (!placeholder?.address) return null;
	return (
		<Modal
			title={t("dialogTitle")}
			body={t("dialogMessage", {
				address: placeholder.address,
			})}
			onSubmitAction={handleSubmit}
			confirmLabel={t("publish")}
		/>
	);
}

export default PublicationModal;
