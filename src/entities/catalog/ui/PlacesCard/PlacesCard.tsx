import React from "react";
import { CalendarMonth, FmdGood } from "@mui/icons-material";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	Grid,
	Typography,
} from "@mui/material";

import Image from "next/image";

import { HEIGHT, LibraryGridPos, WIDTH } from "./constants";
import { PlacesCardProps } from "./types";

function PlacesCard({
	description,
	date,
	url,
	alt,
	category,
	moreBtnComponent,
	address,
}: PlacesCardProps) {
	return (
		<Grid size={LibraryGridPos}>
			<Card sx={{ display: "grid", height: "100%" }}>
				{url && (
					<CardMedia title={address}>
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
					<Typography variant="body1">{description}</Typography>
					<Typography sx={{ display: "flex", gap: 0.5 }} variant="body2">
						<FmdGood fontSize="small" color="primary" />
						{address}
					</Typography>
				</CardContent>
				<Box sx={{ marginTop: "auto" }}>
					<CardContent
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						{category && <Chip sx={{ borderRadius: 1 }} label={category} />}
						<Chip
							sx={{ borderRadius: 1 }}
							icon={<CalendarMonth sx={{ width: 16 }} />}
							label={date}
						/>
					</CardContent>
					{moreBtnComponent && (
						<>
							<Divider />
							<CardActions>{moreBtnComponent}</CardActions>
						</>
					)}
				</Box>
			</Card>
		</Grid>
	);
}

export default PlacesCard;
