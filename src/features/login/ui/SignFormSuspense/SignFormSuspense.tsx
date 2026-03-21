"use client";

import React, { Suspense } from "react";

import { SignFormSuspenseProps } from "./types";

function SignFormSuspense({ children }: SignFormSuspenseProps) {
	return <Suspense>{children}</Suspense>;
}

export default SignFormSuspense;
