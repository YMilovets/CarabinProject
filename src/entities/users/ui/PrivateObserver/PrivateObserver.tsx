"use client";

import { Box } from "@mui/material";

import { useGetRoleQuery } from "@/src/entities/users";

import { PrivateObserverProps } from "./types";

function PrivateObserver({ children, selectedRole }: PrivateObserverProps) {
	const { data } = useGetRoleQuery({});

	const { data: role } = { ...data };

	if (role !== selectedRole) return null;
	return <Box key={role}>{children}</Box>;
}

export default PrivateObserver;
