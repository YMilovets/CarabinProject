import { combineReducers } from "@reduxjs/toolkit";

import {
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
import { modalReducer, modalReducerPath } from "@/src/entities/modal";
import { usersReducer, usersReducerPath } from "@/src/entities/users";

export const rootReducer = combineReducers({
	[searchReducerPath]: searchReducer,
	[sortingReducerPath]: sortingReducer,
	[placesReducerPath]: placesReducer,
	[selectedCategoryReducerPath]: selectedCategoryReducer,
	[mapReducerPath]: mapReducer,
	[geoReducerPath]: geoReducer,
	[mapFeedbackReducerPath]: mapFeedbackReducer,
	[geoSearchPath]: geoSearchReducer,
	[modalReducerPath]: modalReducer,
	[usersReducerPath]: usersReducer,
});
