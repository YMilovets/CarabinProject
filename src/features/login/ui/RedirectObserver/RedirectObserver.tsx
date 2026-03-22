"use client";

import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import { RedirectObserverProps } from "./types";

function RedirectObserver({ children, to }: RedirectObserverProps) {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
			router.push(to);
		}
	}, [to, router, status]);

	if (status === "authenticated") {
		return <CircularProgress />;
	}
	if (status === "loading") return <CircularProgress />;
	return children;
}

export default RedirectObserver;
