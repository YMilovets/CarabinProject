"use client";

import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

import { useGetCategoriesQuery } from "@/src/entities/catalog";

function CategoryField() {
	const t = useTranslations("feedbackPage");
	const { data: categories, isError, isLoading } = useGetCategoriesQuery({});
	const { data } = { ...categories };

	const isNotExist = isError || isLoading || !data;

	return (
		<Autocomplete
			freeSolo
			options={isNotExist ? [] : data.map(({ _id }) => _id)}
			renderInput={(params) => (
				<TextField {...params} label={t("objectCategory")} name="category" />
			)}
		/>
	);
}

export default CategoryField;
