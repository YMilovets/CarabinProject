"use client";

import React from "react";
import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

import { useAppDispatch } from "@/src/app/hooks";
import { setTimestamp } from "@/src/entities/feedback";

import { useSearchCity } from "../../hooks";

function GeoSearch() {
	const t = useTranslations("feedbackPage");
	const dispatch = useAppDispatch();
	const { handleChange, handleOptionClick, search, searchedData } =
		useSearchCity();

	return (
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
				value={search}
				sx={{ flex: 1 }}
				onChange={() => {
					dispatch(setTimestamp(Date.now()));
				}}
			/>
		</FormControl>
	);
}

export default GeoSearch;
