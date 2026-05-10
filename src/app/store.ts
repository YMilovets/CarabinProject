import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { placesMiddleware } from "@/src/entities/catalog";
import {
	geoMiddleware,
	geoSearchMiddleware,
	mapMiddleware,
} from "@/src/entities/feedback";

import { rootReducer } from "./reducers";

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(placesMiddleware)
				.concat(mapMiddleware)
				.concat(geoMiddleware)
				.concat(geoSearchMiddleware),
	});
}
const store = setupStore();

setupListeners(store.dispatch);
