"use client";

import { useMobile } from "@/src/shared/hooks";

import { DisplayObserverProps } from "./types";

function DisplayObserver({
	children,
	isMobileMode = true,
	width = "lg",
}: DisplayObserverProps) {
	const isMobile = useMobile(width);

	const isNotVisible = !(isMobileMode !== isMobile);

	if (isNotVisible) return null;
	return children;
}

export default DisplayObserver;
