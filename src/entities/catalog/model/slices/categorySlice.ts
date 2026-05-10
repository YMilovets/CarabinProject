import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CATEGORY_SLICE_TITLE } from "../constants";

import { InitialStateCategoriesType } from "./types";

const initialState: InitialStateCategoriesType = {
	selectCategories: {},
};

export const {
	reducerPath: selectedCategoryReducerPath,
	reducer: selectedCategoryReducer,
	actions: { setSelectCategory, initCategory },
} = createSlice({
	name: CATEGORY_SLICE_TITLE,
	initialState,
	reducers: {
		setSelectCategory: (
			state,
			{ payload: selectedId }: PayloadAction<string>,
		) => {
			const isSelected = !state.selectCategories[selectedId];

			state.selectCategories[selectedId] = isSelected;
		},
		initCategory: (state, { payload = [] }: PayloadAction<Array<string>>) => {
			payload.forEach(
				(categoryId) => (state.selectCategories[categoryId] = true),
			);
		},
	},
});
