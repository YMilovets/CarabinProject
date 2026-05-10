"use client";

import React from "react";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/src/app/hooks";
import { setModal } from "@/src/entities/modal";

import { PlacesControlProps } from "./types";

function PlacesControl({ address, id }: PlacesControlProps) {
	const cT = useTranslations("catalogPage");
	const dispatch = useAppDispatch();

	return (
		<Button
			onClick={() => dispatch(setModal({ id, placeholder: { address } }))}
		>
			{cT("removePublication")}
		</Button>
	);
}

export default PlacesControl;
