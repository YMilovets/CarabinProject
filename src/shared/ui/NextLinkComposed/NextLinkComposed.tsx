"use client";

import Link from "next/link";

import { NextLinkComposedProps } from "./types";

function NextLinkComposed({ to, linkAs, ...props }: NextLinkComposedProps) {
	return <Link {...props} href={to} as={linkAs} />;
}

export default NextLinkComposed;
