import React from "react";
import { Chip, Divider } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/src/app/hooks";
import { resetCategory, useGetCategoriesQuery } from "@/src/entities/catalog";

import { useCatalogParams } from "../../hooks";

function CategoryReset() {
	const t = useTranslations("catalogPage");

	const { search, selectedCategories } = useCatalogParams();
	const { data } = useGetCategoriesQuery({ search });
	const dispatch = useAppDispatch();

	const handleReset = () => {
		dispatch(resetCategory(categories.map(({ _id }) => _id)));
	};

	const { data: categories = [] } = { ...data };
	const isExistCategories = categories.length > 0;

	const isAllSelectedCategories =
		Object.values(selectedCategories).filter(
			(selectedCategory) => selectedCategory,
		).length === categories.length;

	if (!isExistCategories) return null;
	return (
		<>
			<Chip
				variant={!isAllSelectedCategories ? "outlined" : "filled"}
				label={t("all")}
				onClick={handleReset}
				sx={{ width: 100, borderRadius: 1 }}
				title={t("displayAllCategory")}
			/>
			<Divider orientation="vertical" flexItem />
		</>
	);
}

export default CategoryReset;
