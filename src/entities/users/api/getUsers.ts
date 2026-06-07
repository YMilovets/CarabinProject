import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Response } from "@/src/shared";
import { UserType } from "@/src/shared/api";

import { getApiURL } from "../../catalog";

import { ROLE_API, USERS_PATH } from "./constants";

export const {
	reducerPath: usersReducerPath,
	reducer: usersReducer,
	middleware: usersMiddleware,
	useGetRoleQuery,
} = createApi({
	reducerPath: USERS_PATH,
	baseQuery: fetchBaseQuery({
		baseUrl: getApiURL(),
	}),
	endpoints: (builder) => ({
		getRole: builder.query<Response<UserType["role"]>, unknown>({
			query: () => ({
				url: ROLE_API,
			}),
		}),
	}),
});
