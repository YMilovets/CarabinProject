"use client";

import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useTranslations } from "next-intl";

import { PlacesCard, useGetPlacesQuery } from "@/src/entities/catalog";
import { useCatalogParams } from "@/src/features/catalog/hooks";
import { formatDate } from "@/src/shared/utils/client";

import PlacesAlert from "../PlacesAlert";

import { GRID_GAP } from "./constants";

function PlacesCatalog() {
	const t = useTranslations("common");
	const { params, selectedCategories } = useCatalogParams();

	const { isLoading, isError, data } = useGetPlacesQuery(
		Object.fromEntries(params),
		{
			skip: Object.keys(selectedCategories).length === 0,
		},
	);

	const { data: calalog = [] } = { ...data };

	return (
		<>
			{isError && <PlacesAlert>{t("refusedConnection")}</PlacesAlert>}
			{isLoading && <CircularProgress />}
			{!isError && (
				<Grid container spacing={GRID_GAP}>
					{calalog.map(({ _id, description, category, image, date }) => (
						<PlacesCard
							key={_id.toString()}
							description={description}
							title={category}
							url={image.url}
							alt={image.alt}
							category={category}
							date={formatDate(date)}
						/>
					))}
				</Grid>
			)}
		</>
	);
}

export default PlacesCatalog;
