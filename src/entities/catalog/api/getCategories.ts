import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	CategoriesRequest,
	CategoriesResponse,
	Response,
} from "@/src/shared/api/types";

import { initCategory } from "../model";
import getApiURL from "../utils/getApiURL";

import { CATEGORIES_PATH } from "./constants";

export const {
	useGetCategoriesQuery,
	reducer: categoriesReducer,
	reducerPath: categoriesReducerPath,
	middleware: categoriesMiddleware,
} = createApi({
	reducerPath: CATEGORIES_PATH,
	baseQuery: fetchBaseQuery({ baseUrl: getApiURL() }),
	endpoints: (builder) => ({
		getCategories: builder.query<
			Response<Array<CategoriesResponse>>,
			CategoriesRequest
		>({
			queryFn: async (params, { dispatch }, _, baseQuery) => {
				const { data, error, meta } = await baseQuery({
					params,
					url: CATEGORIES_PATH,
				});

				const categories = data as Response<Array<CategoriesResponse>>;
				dispatch(initCategory(categories.data.map(({ _id }) => _id)));

				if (error) return { error, meta };
				return { data: categories, meta };
			},
		}),
	}),
});
