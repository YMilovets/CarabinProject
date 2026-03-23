"use client";

import React, { ChangeEventHandler, useState } from "react";
import { Close, Search } from "@mui/icons-material";
import { IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import { useDebounce } from "rooks";

import { useCatalogParams } from "../../hooks";

import { WAIT } from "./constants";

function PlacesSearch() {
	const { search: defaultSearch, handleSearch } = useCatalogParams();
	const [search, setSearch] = useState(defaultSearch);
	const t = useTranslations("common");

	const handleChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement,
		Element
	> = ({ target: { value } }) => {
		setSearch(value);
		handleDebounceChange(value);
	};

	const handleDebounceChange = useDebounce((searchValue: string) => {
		handleSearch(searchValue);
	}, WAIT);

	return (
		<Paper sx={{ flex: 1 }}>
			<TextField
				name="search"
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position="end">
								{search && (
									<IconButton
										onClick={() => {
											setSearch("");
											handleSearch("");
										}}
										aria-label={t("clear")}
										title={t("clear")}
									>
										<Close />
									</IconButton>
								)}
								<Search />
							</InputAdornment>
						),
					},
				}}
				value={search}
				label={t("search")}
				onChange={handleChange}
				sx={{ display: "flex" }}
			/>
		</Paper>
	);
}

export default PlacesSearch;
