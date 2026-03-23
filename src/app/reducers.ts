import { combineReducers } from "@reduxjs/toolkit";

import { placesReducer, placesReducerPath } from "../entities/catalog";

export const rootReducer = combineReducers({
	[placesReducerPath]: placesReducer,
});
