"use client";

import React from "react";
import { InputLabel, Select, SelectChangeEvent } from "@mui/material";
import { useTranslations } from "next-intl";

import { useGetPlacesQuery } from "@/src/entities/catalog";
import { useProfileId } from "@/src/shared/hooks";
import { SortOrder } from "@/src/shared/types";

import { useCatalogParams } from "../../hooks";

import { PlacesSelectProps } from "./types";

function PlacesSelect({ children }: PlacesSelectProps) {
	const {
		sortBy,
		handleSortAtQuery,
		handleSortByQuery,
		params,
		selectedCategories,
	} = useCatalogParams();
	const t = useTranslations("catalogPage");

	const { menuId } = useProfileId("menu");

	const { isError } = useGetPlacesQuery(Object.fromEntries(params), {
		skip: Object.keys(selectedCategories).length === 0,
	});

	const handleChange = (event: SelectChangeEvent) => {
		if (isError) return;
		handleSortByQuery(event.target.value);
		handleSortAtQuery(SortOrder.Asc);
	};

	return (
		<>
			<InputLabel id={menuId}>{t("sortBy")}</InputLabel>
			<Select
				value={sortBy}
				labelId={menuId}
				label={t("sortBy")}
				onChange={handleChange}
				sx={{ flex: 1, minWidth: "8em" }}
				disabled={isError}
			>
				{children}
			</Select>
		</>
	);
}

export default PlacesSelect;
