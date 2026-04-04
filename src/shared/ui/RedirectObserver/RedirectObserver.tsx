"use client";

import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";

import { useRouter, useSearchParams } from "next/navigation";

import { RedirectObserverProps } from "./types";

function RedirectObserver({ children, to }: RedirectObserverProps) {
	const searchParams = useSearchParams();
	const { status } = useSession();
	const router = useRouter();

	const callbackUrl = searchParams?.get("callbackUrl") ?? to;

	useEffect(() => {
		if (status === "authenticated") {
			router.push(callbackUrl);
		}
	}, [callbackUrl, router, status]);

	if (status === "authenticated") {
		return <CircularProgress />;
	}
	if (status === "loading") return <CircularProgress />;
	return children;
}

export default RedirectObserver;
