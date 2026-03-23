import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SEARCH_SLICE_TITLE } from "../constants";

import { InitialStateSearchType } from "./types";

const initialState: InitialStateSearchType = {
	search: "",
};

export const {
	reducer: searchReducer,
	reducerPath: searchReducerPath,
	actions: { setSearchQuery },
} = createSlice({
	name: SEARCH_SLICE_TITLE,
	reducers: {
		setSearchQuery: (state, { payload }: PayloadAction<string>) => {
			state.search = payload;
		},
	},
	initialState,
});
