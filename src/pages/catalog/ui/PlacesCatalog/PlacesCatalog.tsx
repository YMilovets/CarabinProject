"use client";

import React from "react";
import { CircularProgress, Grid } from "@mui/material";

import { PlacesCard, useGetPlacesQuery } from "@/src/entities/catalog";
import { formatDate } from "@/src/shared/utils/client";

import { GRID_GAP } from "./constants";

function PlacesCatalog() {
	const { isLoading, isError, data } = useGetPlacesQuery({});

	const { data: calalog = [] } = { ...data };

	return (
		<>
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
