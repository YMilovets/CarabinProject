"use client";

import React from "react";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/src/app/hooks";
import { setModal } from "@/src/entities/modal";
import { useGetRoleQuery } from "@/src/entities/users";

import { PlacesControlProps } from "./types";

function PlacesControl({ address, id }: PlacesControlProps) {
	const cT = useTranslations("catalogPage");
	const dispatch = useAppDispatch();

	const { data } = useGetRoleQuery({});
	const { data: role } = { ...data };

	if (role !== "admin") return null;
	return (
		<Button
			onClick={() => dispatch(setModal({ id, placeholder: { address } }))}
		>
			{cT("removePublication")}
		</Button>
	);
}

export default PlacesControl;
