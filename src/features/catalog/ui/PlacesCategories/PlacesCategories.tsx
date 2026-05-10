"use client";

import React from "react";
import { Box, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppDispatch } from "@/src/app/hooks";
import {
	setSelectCategory,
	useGetCategoriesQuery,
} from "@/src/entities/catalog";

import { useCatalogParams } from "../../hooks";
import CategoryReset from "../CategoryReset";

import { getStyles } from "./utils";

import "swiper/css";
import styles from "./PlacesCategories.module.css";

function PlacesCategories() {
	const { search, selectedCategories } = useCatalogParams();
	const { data, isError } = useGetCategoriesQuery({ search });
	const dispatch = useAppDispatch();

	const handleClick = (id: string) => {
		return () => dispatch(setSelectCategory(id));
	};

	const { data: categories = [] } = { ...data };

	if (isError) return null;
	return (
		<Box sx={getStyles}>
			<CategoryReset />
			<Swiper className={styles.swiper} spaceBetween={10} width={100}>
				{categories.map(({ _id }) => (
					<SwiperSlide className={styles.swiper__slide} key={_id}>
						<Chip
							variant={!selectedCategories[_id] ? "outlined" : "filled"}
							label={_id}
							data-id={_id}
							onClick={handleClick(_id)}
							sx={{ flex: 1, borderRadius: 1 }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
}

export default PlacesCategories;
