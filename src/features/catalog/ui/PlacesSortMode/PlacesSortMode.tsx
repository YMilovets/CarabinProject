"use client";

import React from "react";
import {
	ArrowDownward,
	ArrowUpward,
	FormatAlignJustify,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

import { useGetPlacesQuery } from "@/src/entities/catalog";
import { SortOrder } from "@/src/shared/types";

import { useCatalogParams } from "../../hooks";

import { SortedIconItemType } from "./types";

function PlacesSortMode() {
	const t = useTranslations("catalogPage");
	const { sortAt, sortBy, selectedCategories, params, handleSortAtQuery } =
		useCatalogParams();
	const { isError } = useGetPlacesQuery(Object.fromEntries(params), {
		skip: Object.keys(selectedCategories).length === 0,
	});

	const isDisplayOrder = !sortBy || isError;

	const handleOrderChange = (order: number) => {
		return () => {
			if (isDisplayOrder) return;
			handleSortAtQuery(order);
		};
	};

	const SortedIcon: Record<number, SortedIconItemType> = {
		[SortOrder.Desc]: { icon: <ArrowUpward />, title: t("desc") },
		[SortOrder.Default]: { icon: <FormatAlignJustify />, title: t("none") },
		[SortOrder.Asc]: { icon: <ArrowDownward />, title: t("asc") },
	};

	const order = sortAt >= SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;

	return (
		<Button
			disabled={isDisplayOrder}
			onClick={handleOrderChange(order)}
			variant="outlined"
			title={SortedIcon[sortAt].title}
			sx={{ minWidth: "auto" }}
		>
			{SortedIcon[sortAt].icon}
		</Button>
	);
}

export default PlacesSortMode;
