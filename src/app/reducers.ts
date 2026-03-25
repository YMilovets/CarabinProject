import { combineReducers } from "@reduxjs/toolkit";

import {
	categoriesReducer,
	categoriesReducerPath,
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
	[categoriesReducerPath]: categoriesReducer,
});
