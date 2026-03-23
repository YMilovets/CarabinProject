"use client";

import { useSession } from "next-auth/react";

import { ServerObserverrProps } from "./types";

function SessionObserver({
	children,
	isAuthentificated = false,
}: ServerObserverrProps) {
	const { data } = useSession();

	const isHidden = !!data === isAuthentificated;
	if (!isHidden) return null;
	return children;
}

export default SessionObserver;
