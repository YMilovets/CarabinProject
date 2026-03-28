import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Response } from "@/src/shared";

import { getApiURL } from "../../catalog/utils";
import { DEFAULT_COORDS } from "../model/constants";

import { MAP_PATH } from "./constants";
import { getGeoData } from "./getGeoData";

export const {
	reducerPath: mapReducerPath,
	middleware: mapMiddleware,
	reducer: mapReducer,
	useGetMapQuery,
} = createApi({
	reducerPath: MAP_PATH,
	baseQuery: fetchBaseQuery({ baseUrl: getApiURL() }),
	endpoints: (builder) => ({
		getMap: builder.query<Response<string>, void>({
			queryFn: async (_1, { dispatch }, _2, baseQuery) => {
				const { data, error, meta } = await baseQuery({
					url: MAP_PATH,
				});

				const yandexMapSDK = data as Response<string>;
				dispatch(
					getGeoData.initiate({
						lng: DEFAULT_COORDS[0],
						lat: DEFAULT_COORDS[1],
					}),
				);

				if (error) return { error, meta };
				return { data: yandexMapSDK, meta };
			},
		}),
	}),
});
