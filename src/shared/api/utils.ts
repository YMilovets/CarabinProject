import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { authConfig } from "../config";
import { getHeaders } from "../utils";

import { FetchResponseType, Status } from "./types";

export function fetchResponse<TResponse>({
	data = null,
	error = null,
	status = Status.ServerError,
}: FetchResponseType<TResponse>) {
	return NextResponse.json({ data, error }, { headers: getHeaders(), status });
}

export async function isDeniedAccess(request: NextRequest) {
	const token = await getToken({ req: request });
	const session = await getServerSession(authConfig);

	const isDebug = token && process.env.NODE_ENV === "development";

	return !session && !isDebug;
}
