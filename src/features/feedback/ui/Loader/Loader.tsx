"use client";

import React from "react";
import { CircularProgress } from "@mui/material";

import { useGetMapQuery } from "@/src/entities/feedback";

function Loader() {
	const { isLoading } = useGetMapQuery();

	if (!isLoading) return null;
	return <CircularProgress key="loader" />;
}

export default Loader;
