"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import { useRemovePlaceMutation } from "@/src/entities/catalog";
import { clearModal } from "@/src/entities/modal";
import { Modal } from "@/src/widgets/modal";

function PlacesModal() {
	const t = useTranslations("catalogPage");
	const placeholder = useAppSelector((state) => state.modalReducer.placeholder);
	const dispatch = useAppDispatch();
	const [triggerRemove] = useRemovePlaceMutation();

	const handleSubmit = async (formData: FormData) => {
		const id = formData.get("id")?.toString();

		dispatch(clearModal());
		if (id) triggerRemove(id);
	};

	if (!placeholder) return null;
	return (
		<Modal
			title={t("dialogTitle")}
			body={t("dialogMessage", { address: placeholder.address })}
			confirmLabel={t("removePublication")}
			onSubmitAction={handleSubmit}
		/>
	);
}

export default PlacesModal;
