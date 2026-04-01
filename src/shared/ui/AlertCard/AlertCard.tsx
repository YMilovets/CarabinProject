import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

import { AlertCardProps } from "./types";

function AlertCard({
	body,
	title,
	children,
	controlComponents,
}: AlertCardProps) {
	return (
		<Card sx={{ maxWidth: "40rem" }}>
			<CardContent sx={{ display: "grid", gap: 1.5 }}>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="body1">{body}</Typography>
				<Typography variant="body2">{children}</Typography>
			</CardContent>
			<CardActions>{controlComponents}</CardActions>
		</Card>
	);
}

export default AlertCard;
