"use client";

import React, { ReactNode } from "react";
import {
	ArrowDownward,
	ArrowUpward,
	FormatAlignJustify,
} from "@mui/icons-material";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useTranslations } from "next-intl";

import { useGetPlacesQuery } from "@/src/entities/catalog";
import { SortOrder } from "@/src/shared/api/types";
import { useProfileId } from "@/src/shared/hooks";

import { useCatalogParams } from "../../hooks";

function PlacesSort() {
	const { sortAt, sortBy, handleSortAtQuery, handleSortByQuery, params } =
		useCatalogParams();
	const { isError } = useGetPlacesQuery(Object.fromEntries(params));
	const { menuId } = useProfileId("menu");
	const t = useTranslations("catalogPage");

	const isDisplayOrder = !sortBy || isError;

	const handleChange = (event: SelectChangeEvent) => {
		if (isError) return;
		handleSortByQuery(event.target.value);
		handleSortAtQuery(SortOrder.Asc);
	};

	const handleOrderChange = (order: number) => {
		if (isDisplayOrder) return;
		handleSortAtQuery(order);
	};

	const SortedIcon: Record<number, { icon: ReactNode; title: string }> = {
		[SortOrder.Desc]: { icon: <ArrowUpward />, title: t("desc") },
		[SortOrder.Default]: { icon: <FormatAlignJustify />, title: t("none") },
		[SortOrder.Asc]: { icon: <ArrowDownward />, title: t("asc") },
	};

	const order = sortAt >= SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;

	return (
		<>
			<FormControl>
				<Paper sx={{ display: "flex" }}>
					<InputLabel id={menuId}>{t("sortBy")}</InputLabel>
					<Select
						value={sortBy}
						labelId={menuId}
						label={t("sortBy")}
						onChange={handleChange}
						sx={{ flex: 1, minWidth: "8em" }}
						disabled={isError}
					>
						<MenuItem value="">{t("none")}</MenuItem>
						<MenuItem value="date">{t("dateBy")}</MenuItem>
						<MenuItem value="category">{t("categoryBy")}</MenuItem>
					</Select>
				</Paper>
			</FormControl>
			<FormControl sx={{ display: "flex" }}>
				<Paper sx={{ display: "flex", flex: 1 }}>
					<Button
						disabled={isDisplayOrder}
						onClick={() => handleOrderChange(order)}
						variant="outlined"
						title={SortedIcon[sortAt].title}
						sx={{ minWidth: "auto" }}
					>
						{SortedIcon[sortAt].icon}
					</Button>
				</Paper>
			</FormControl>
		</>
	);
}

export default PlacesSort;
