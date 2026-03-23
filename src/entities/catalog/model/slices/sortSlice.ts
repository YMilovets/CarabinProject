import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SORTING_SLICE_TITLE } from "../constants";

import { InitialStateSortingType } from "./types";

const initialState: InitialStateSortingType = {
	sortAt: 1,
	sortBy: "",
};

export const {
	reducer: sortingReducer,
	reducerPath: sortingReducerPath,
	actions: { setSortingByQuery, setSortingAtQuery },
} = createSlice({
	name: SORTING_SLICE_TITLE,
	reducers: {
		setSortingByQuery: (state, { payload }: PayloadAction<string>) => {
			state.sortBy = payload;
		},
		setSortingAtQuery: (
			state,
			{ payload }: PayloadAction<InitialStateSortingType["sortAt"]>,
		) => {
			state.sortAt = payload;
		},
	},
	initialState,
});
