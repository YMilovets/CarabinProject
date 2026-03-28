import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GeoDataRequest, Response, YandexGeocodeResponse } from "@/src/shared";

import { getApiURL } from "../../catalog/utils";
import { setAddress, setMapCoords } from "../model";

import { GEO_PATH } from "./constants";
import { getAddressFromGeocodeResponse } from "./utils";

export const {
	reducerPath: geoReducerPath,
	reducer: geoReducer,
	middleware: geoMiddleware,
	useGetGeoDataMutation,
	endpoints: { getGeoData },
} = createApi({
	reducerPath: GEO_PATH,
	baseQuery: fetchBaseQuery({ baseUrl: getApiURL() }),
	endpoints: (builder) => ({
		getGeoData: builder.mutation<
			Response<YandexGeocodeResponse>,
			GeoDataRequest
		>({
			queryFn: async ({ lng, lat }, { dispatch }, _, baseQuery) => {
				const { data, error, meta } = await baseQuery({
					url: GEO_PATH,
					params: { lng, lat },
				});

				if (error) return { error, meta };
				const geocodeResponse = data as Response<YandexGeocodeResponse>;

				dispatch(setAddress(getAddressFromGeocodeResponse(geocodeResponse)));
				dispatch(setMapCoords([lng, lat]));

				return { data: geocodeResponse, meta };
			},
		}),
	}),
});
