import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { categoriesMiddleware, placesMiddleware } from "../entities/catalog";

import { rootReducer } from "./reducers";

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(placesMiddleware)
				.concat(categoriesMiddleware),
	});
}
const store = setupStore();

setupListeners(store.dispatch);
