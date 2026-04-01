import { combineReducers } from "@reduxjs/toolkit";

import {
	categoriesReducer,
	categoriesReducerPath,
	placesReducer,
	placesReducerPath,
	searchReducer,
	searchReducerPath,
	selectedCategoryReducer,
	selectedCategoryReducerPath,
	sortingReducer,
	sortingReducerPath,
} from "@/src/entities/catalog";
import {
	geoReducer,
	geoReducerPath,
	geoSearchPath,
	geoSearchReducer,
	mapFeedbackReducer,
	mapFeedbackReducerPath,
	mapReducer,
	mapReducerPath,
} from "@/src/entities/feedback";

export const rootReducer = combineReducers({
	[searchReducerPath]: searchReducer,
	[sortingReducerPath]: sortingReducer,
	[placesReducerPath]: placesReducer,
	[categoriesReducerPath]: categoriesReducer,
	[selectedCategoryReducerPath]: selectedCategoryReducer,
	[mapReducerPath]: mapReducer,
	[geoReducerPath]: geoReducer,
	[mapFeedbackReducerPath]: mapFeedbackReducer,
	[geoSearchPath]: geoSearchReducer,
});
