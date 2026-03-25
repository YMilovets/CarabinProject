"use client";

import React from "react";
import { Box, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import { useGetCategoriesQuery } from "@/src/entities/catalog";
import { setSelectCategory } from "@/src/entities/catalog/model";

import { useCatalogParams } from "../../hooks";

import { getStyles } from "./utils";

import "swiper/css";
import styles from "./PlacesCategories.module.css";

function PlacesCategories() {
	const { search } = useCatalogParams();
	const { data, isError } = useGetCategoriesQuery({ search });
	const selectedList = useAppSelector(
		(state) => state.selectedCategoryReducer.selectCategories,
	);
	const dispatch = useAppDispatch();

	const handleClick = (id: string) => {
		return () => dispatch(setSelectCategory(id));
	};

	const { data: categories = [] } = { ...data };

	if (isError) return null;
	return (
		<Box sx={getStyles}>
			<Swiper className={styles.swiper} spaceBetween={10} width={100}>
				{categories.map(({ _id }) => (
					<SwiperSlide className={styles.swiper__slide} key={_id}>
						<Chip
							variant={selectedList[_id] ? "outlined" : "filled"}
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
