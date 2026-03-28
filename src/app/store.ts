import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { categoriesMiddleware, placesMiddleware } from "@/src/entities/catalog";

import { geoMiddleware, mapMiddleware } from "../entities/feedback";

import { rootReducer } from "./reducers";

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(placesMiddleware)
				.concat(categoriesMiddleware)
				.concat(mapMiddleware)
				.concat(geoMiddleware),
	});
}
const store = setupStore();

setupListeners(store.dispatch);
