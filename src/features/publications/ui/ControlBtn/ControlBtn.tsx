"use client";

import React from "react";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/src/app/hooks";
import { setModal } from "@/src/entities/modal";

import { ControlProps } from "./types";

function ControlBtn({ publicationId, address }: ControlProps) {
	const pubT = useTranslations("publicationPage");
	const dispatch = useAppDispatch();

	const handleModal = () => {
		dispatch(setModal({ id: publicationId, placeholder: { address } }));
	};

	return <Button onClick={handleModal}>{pubT("publish")}</Button>;
}

export default ControlBtn;
