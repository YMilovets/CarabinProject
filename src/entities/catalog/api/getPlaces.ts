import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	PlacesRequest,
	PlacesResponse,
	Response,
} from "@/src/shared/api/types";

import getApiURL from "../utils/getApiURL";

import { PLACES_PATH } from "./constants";

export const {
	middleware: placesMiddleware,
	reducer: placesReducer,
	reducerPath: placesReducerPath,
	useGetPlacesQuery,
} = createApi({
	reducerPath: PLACES_PATH,
	baseQuery: fetchBaseQuery({ baseUrl: getApiURL() }),
	endpoints: (builder) => {
		return {
			getPlaces: builder.query<
				Response<Array<PlacesResponse>>,
				Partial<PlacesRequest>
			>({
				query: (params) => ({ url: PLACES_PATH, method: "GET", params }),
			}),
		};
	},
});
