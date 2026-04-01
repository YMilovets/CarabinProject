import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Response } from "@/src/shared";

import { getApiURL } from "../../catalog/utils";

import { convertToDadataSuggestionArrayAdapter } from "./adapters";
import { GEO_SEARCH } from "./constants";
import { DadataMergedResponseType } from "./types";

export const {
	reducerPath: geoSearchPath,
	reducer: geoSearchReducer,
	middleware: geoSearchMiddleware,
	useGetGeoPositionSearchMutation,
} = createApi({
	reducerPath: GEO_SEARCH,
	baseQuery: fetchBaseQuery({
		baseUrl: getApiURL(),
	}),
	endpoints: (builder) => ({
		getGeoPositionSearch: builder.mutation<
			Response<Array<DadataMergedResponseType>>,
			string
		>({
			query: (search) => ({
				url: GEO_SEARCH,
				params: { query: search },
			}),
			transformResponse: convertToDadataSuggestionArrayAdapter,
		}),
	}),
});
