"use client";

import React, { ChangeEventHandler } from "react";
import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import { setAddress } from "@/src/entities/feedback";

function Address() {
	const address = useAppSelector((state) => state.mapReducer.address);
	const dispatch = useAppDispatch();
	const t = useTranslations("feedbackPage");

	const handleChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement,
		Element
	> = (e) => {
		e.preventDefault();
		dispatch(setAddress(e.target.value));
	};

	return (
		<TextField
			name="address"
			value={address ?? ""}
			label={t("selectedAddress")}
			onChange={handleChange}
			slotProps={{
				htmlInput: {
					readOnly: true,
				},
			}}
			multiline
		/>
	);
}

export default Address;
