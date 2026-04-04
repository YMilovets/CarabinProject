import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { authConfig } from "../config";
import { getHeaders } from "../utils";

import { FetchResponseType, RecaptchaResponseType, Status } from "./types";

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

export async function verifyRecaptchaToken(token: string) {
	const secretKey = process.env.RECAPTCHA_SECRET_KEY;

	if (!secretKey) {
		throw new Error("Secret key not found");
	}

	const recaptchaAPI = process.env.NEXT_PUBLIC_RECAPTCHA_API ?? "";
	const url = new URL(recaptchaAPI);
	url.searchParams.append("secret", secretKey);
	url.searchParams.append("response", token);

	const response = await fetch(url, { method: "POST" });
	const recaptchaData: RecaptchaResponseType = await response.json();

	return recaptchaData;
}
