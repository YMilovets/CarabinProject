import React from "react";
import { CalendarMonth } from "@mui/icons-material";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Grid,
	Typography,
} from "@mui/material";

import Image from "next/image";

import { HEIGHT, LibraryGridPos, WIDTH } from "./constants";
import { PlacesCardProps } from "./types";

function PlacesCard({
	description,
	title,
	date,
	url,
	alt,
	category,
	moreBtnComponent,
}: PlacesCardProps) {
	return (
		<Grid size={LibraryGridPos}>
			<Card sx={{ display: "grid", height: "100%" }}>
				{url && (
					<CardMedia title={title}>
						<Image
							alt={alt ?? ""}
							src={url}
							sizes="100vw"
							style={{
								width: "100%",
								height: "100%",
							}}
							width={WIDTH}
							height={HEIGHT}
						/>
					</CardMedia>
				)}
				<CardContent
					sx={{
						display: "grid",
						alignContent: "space-between",
						gap: 1,
					}}
				>
					<Typography variant="body2">{description}</Typography>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						{category && <Chip label={category} />}
						<Chip icon={<CalendarMonth sx={{ width: 16 }} />} label={date} />
					</Box>
				</CardContent>
				{moreBtnComponent && (
					<CardActions sx={{ marginTop: "auto" }}>
						{moreBtnComponent}
					</CardActions>
				)}
			</Card>
		</Grid>
	);
}

export default PlacesCard;
