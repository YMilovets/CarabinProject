import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CATEGORY_SLICE_TITLE } from "../constants";

import { InitialStateCategoriesType } from "./types";
import { setStatusCategories } from "./utils";

const initialState: InitialStateCategoriesType = {
	selectCategories: {},
};

export const {
	reducerPath: selectedCategoryReducerPath,
	reducer: selectedCategoryReducer,
	actions: { setSelectCategory, initCategory, resetCategory },
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
		resetCategory: (state, { payload = [] }: PayloadAction<Array<string>>) => {
			setStatusCategories(state, payload, true);
		},
		initCategory: (state, { payload = [] }: PayloadAction<Array<string>>) => {
			const isEmptySelectedCategories =
				Object.keys(state.selectCategories).length === 0;

			setStatusCategories(state, payload, isEmptySelectedCategories);
		},
	},
});
