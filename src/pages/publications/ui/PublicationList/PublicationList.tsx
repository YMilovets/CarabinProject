import React from "react";
import { Grid } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { getApiURL, PlacesCard } from "@/src/entities/catalog";
import { ControlBtn } from "@/src/features/publications";
import { YMapImage } from "@/src/shared";
import { PlacesResponse, PUBLICATION_API, Response } from "@/src/shared/api";
import { formatDate } from "@/src/shared/utils/client";

import PublicationAlert from "../PublicationAlert";

import { GRID_GAP } from "./constants";

async function getPublications() {
	try {
		const response = await fetch(`${getApiURL()}/${PUBLICATION_API}`, {
			next: {
				tags: [PUBLICATION_API],
			},
		});
		const { data }: Response<Array<PlacesResponse>> = await response.json();

		return { data, error: null };
	} catch (e) {
		return { data: [], error: (e as Error).message };
	}
}

async function PublicationList() {
	const { data, error } = await getPublications();
	const t = await getTranslations("common");
	const pubT = await getTranslations("publicationPage");

	if (error) {
		return <PublicationAlert>{t("refusedConnection")}</PublicationAlert>;
	}

	if (data.length === 0) {
		return (
			<PublicationAlert severity="info" headerTitle={t("info")}>
				{pubT("publishDone")}
			</PublicationAlert>
		);
	}

	return (
		<Grid container spacing={GRID_GAP}>
			{data.map(
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
						title={category}
						description={description}
						category={category}
						date={formatDate(date)}
						imageComponent={
							<YMapImage apiURL={getApiURL()} lat={lat} long={long} />
						}
						moreBtnComponent={
							<ControlBtn publicationId={_id.toString()} address={address} />
						}
						author={author}
						address={address}
					/>
				),
			)}
		</Grid>
	);
}

export default PublicationList;
