import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	CategoriesRequest,
	CategoriesResponse,
	PlacesRequest,
	PlacesResponse,
	Response,
} from "@/src/shared/api/types";

import { initCategory } from "../model";
import getApiURL from "../utils/getApiURL";

import { CATEGORIES_PATH, PLACES_PATH, PUBLICATION_API } from "./constants";

export const {
	middleware: placesMiddleware,
	reducer: placesReducer,
	reducerPath: placesReducerPath,
	useGetPlacesQuery,
	useRemovePlaceMutation,
	useGetCategoriesQuery,
} = createApi({
	reducerPath: PLACES_PATH,
	baseQuery: fetchBaseQuery({ baseUrl: getApiURL() }),
	tagTypes: [PLACES_PATH],
	endpoints: (builder) => {
		return {
			getPlaces: builder.query<
				Response<Array<PlacesResponse>>,
				Partial<PlacesRequest>
			>({
				query: (body) => ({
					url: PLACES_PATH,
					body: JSON.stringify(body),
					method: "POST",
				}),
				providesTags: [PLACES_PATH],
			}),
			getCategories: builder.query<
				Response<Array<CategoriesResponse>>,
				CategoriesRequest
			>({
				queryFn: async (params, { dispatch }, _, baseQuery) => {
					const { data, error, meta } = await baseQuery({
						url: CATEGORIES_PATH,
						params,
					});

					const categories = data as Response<Array<CategoriesResponse>>;

					dispatch(initCategory(categories.data.map(({ _id }) => _id)));

					if (error) return { error, meta };
					return { data: categories, meta };
				},
				providesTags: [PLACES_PATH],
			}),
			removePlace: builder.mutation<Response<string>, string>({
				query: (id) => ({
					url: `${PUBLICATION_API}/remove/${id}`,
					method: "PATCH",
					headers: new Headers([["Cookie", document.cookie]]),
				}),
				invalidatesTags: [PLACES_PATH],
			}),
		};
	},
});
