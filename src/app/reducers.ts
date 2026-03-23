import { combineReducers } from "@reduxjs/toolkit";

import {
	placesReducer,
	placesReducerPath,
	searchReducer,
	searchReducerPath,
	sortingReducer,
	sortingReducerPath,
} from "@/src/entities/catalog";

export const rootReducer = combineReducers({
	[searchReducerPath]: searchReducer,
	[sortingReducerPath]: sortingReducer,
	[placesReducerPath]: placesReducer,
});
