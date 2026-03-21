"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

import { ProfileProps } from "./types";

function ProfileProvider({ children }: ProfileProps) {
	return <SessionProvider>{children}</SessionProvider>;
}

export default ProfileProvider;
