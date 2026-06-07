import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { placesMiddleware } from "@/src/entities/catalog";
import {
	geoMiddleware,
	geoSearchMiddleware,
	mapMiddleware,
} from "@/src/entities/feedback";
import { usersMiddleware } from "@/src/entities/users";

import { rootReducer } from "./reducers";

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(placesMiddleware)
				.concat(mapMiddleware)
				.concat(geoMiddleware)
				.concat(geoSearchMiddleware)
				.concat(usersMiddleware),
	});
}
const store = setupStore();

setupListeners(store.dispatch);
