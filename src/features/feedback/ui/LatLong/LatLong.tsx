"use client";

import React from "react";
import { TextField } from "@mui/material";

import { useAppSelector } from "@/src/app/hooks";

function LatLong() {
	const [lat, lng] = useAppSelector((state) => state.mapReducer.coords);

	return (
		<>
			<TextField
				name="lat"
				defaultValue={lat}
				sx={{ display: "none" }}
				hidden={true}
			/>
			<TextField
				name="long"
				defaultValue={lng}
				sx={{ display: "none" }}
				hidden={true}
			/>
		</>
	);
}

export default LatLong;
