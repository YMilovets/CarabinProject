"use client";

import React from "react";
import {
	Autocomplete,
	Box,
	FormControl,
	TextField,
	Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";

import { useGetMapQuery } from "@/src/entities/feedback";

import { useSearchCity } from "../../hooks";

function GeoSearch() {
	const t = useTranslations("feedbackPage");
	const {
		handleChange,
		handleOptionClick,
		handleSearchChange,
		search,
		searchedData,
	} = useSearchCity();

	const { isSuccess } = useGetMapQuery();

	if (!isSuccess) return null;
	return (
		<>
			<Typography variant="body1">{t("mapInfo")}</Typography>
			<FormControl>
				<Autocomplete
					freeSolo
					options={searchedData?.map(({ value }) => value) ?? []}
					renderOption={({ onClick, ...props }, option) => (
						<Box
							{...props}
							onClick={handleOptionClick(option, onClick)}
							component="li"
							key={option}
						>
							{option}
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							{...params}
							onChange={handleChange}
							label={t("search")}
							name="search"
						/>
					)}
					clearText={t("clearAndReturnMarker")}
					value={search}
					sx={{ flex: 1 }}
					onChange={handleSearchChange}
				/>
			</FormControl>
		</>
	);
}

export default GeoSearch;
