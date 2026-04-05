"use client";

import React from "react";
import { Button, CircularProgress, Grid } from "@mui/material";
import { useTranslations } from "next-intl";

import { PlacesCard, useGetPlacesQuery } from "@/src/entities/catalog";
import { useCatalogParams } from "@/src/features/catalog/hooks";
import { useTheme } from "@/src/shared/hooks";
import { formatDate } from "@/src/shared/utils/client";

import PlacesAlert from "../PlacesAlert";

import { GRID_GAP } from "./constants";
import getStaticYandexImageURL from "./utils";

function PlacesCatalog() {
	const t = useTranslations("common");
	const cT = useTranslations("catalogPage");
	const { params, selectedCategories } = useCatalogParams();

	const { isLoading, isError, data } = useGetPlacesQuery(
		Object.fromEntries(params),
		{
			skip: Object.keys(selectedCategories).length === 0,
		},
	);
	const { isDarkMode } = useTheme();

	const { data: calalog = [] } = { ...data };

	return (
		<>
			{isError && <PlacesAlert>{t("refusedConnection")}</PlacesAlert>}
			{isLoading && <CircularProgress />}
			{!isError && (
				<Grid container spacing={GRID_GAP}>
					{calalog.map(
						({
							_id,
							description,
							category,
							date,
							coords: { lat, long },
							address,
							author,
						}) => (
							<PlacesCard
								key={_id.toString()}
								description={description}
								title={category}
								url={getStaticYandexImageURL(lat, long, isDarkMode)}
								alt={cT("imageText", { address })}
								category={category}
								date={formatDate(date)}
								address={address}
								moreBtnComponent={<Button>{cT("view")}</Button>}
								author={author}
							/>
						),
					)}
				</Grid>
			)}
		</>
	);
}

export default PlacesCatalog;
