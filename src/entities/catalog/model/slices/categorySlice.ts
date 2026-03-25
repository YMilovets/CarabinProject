import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CATEGORY_SLICE_TITLE } from "../constants";

const initialState: { selectCategories: Record<string, boolean> } = {
	selectCategories: {},
};

export const {
	reducerPath: selectedCategoryReducerPath,
	reducer: selectedCategoryReducer,
	actions: { setSelectCategory },
} = createSlice({
	name: CATEGORY_SLICE_TITLE,
	initialState,
	reducers: {
		setSelectCategory: (
			state,
			{ payload: selectedId }: PayloadAction<string>,
		) => {
			const isExistCategory = state.selectCategories[selectedId] === undefined;
			const isSelected = isExistCategory
				? !!isExistCategory
				: !state.selectCategories[selectedId];

			state.selectCategories[selectedId] = isSelected;
		},
	},
});
