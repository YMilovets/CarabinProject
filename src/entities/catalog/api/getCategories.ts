import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	CategoriesRequest,
	CategoriesResponse,
	Response,
} from "@/src/shared/api/types";

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
			query: (params) => ({ url: CATEGORIES_PATH, params }),
		}),
	}),
});
