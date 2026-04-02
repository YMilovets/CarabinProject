import React from "react";
import { FormControl, MenuItem, Paper } from "@mui/material";
import { getTranslations } from "next-intl/server";

import PlacesSelect from "../PlacesSelect";
import PlacesSortMode from "../PlacesSortMode";

async function PlacesSort() {
	const t = await getTranslations("catalogPage");

	return (
		<>
			<FormControl>
				<Paper sx={{ display: "flex" }}>
					<PlacesSelect>
						<MenuItem value="">{t("none")}</MenuItem>
						<MenuItem value="date">{t("dateBy")}</MenuItem>
						<MenuItem value="category">{t("categoryBy")}</MenuItem>
					</PlacesSelect>
				</Paper>
			</FormControl>
			<FormControl sx={{ display: "flex" }}>
				<Paper sx={{ display: "flex", flex: 1 }}>
					<PlacesSortMode />
				</Paper>
			</FormControl>
		</>
	);
}

export default PlacesSort;
