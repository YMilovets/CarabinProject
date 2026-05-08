import React from "react";
import { CalendarMonth, FmdGood, Person2 } from "@mui/icons-material";
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

import { LibraryGridPos } from "./constants";
import { PlacesCardProps } from "./types";

function PlacesCard({
	description,
	date,
	imageComponent,
	category,
	moreBtnComponent,
	address,
	author,
}: PlacesCardProps) {
	return (
		<Grid size={LibraryGridPos}>
			<Card sx={{ display: "grid", height: "100%" }}>
				{imageComponent && (
					<CardMedia title={address}>{imageComponent}</CardMedia>
				)}
				<CardContent
					sx={{
						display: "grid",
						gap: 1,
					}}
				>
					<Typography variant="body1">{description}</Typography>
					{author && (
						<Typography
							variant="caption"
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 0.5,
								pr: 2,
							}}
						>
							<Person2 fontSize="small" color="primary" />
							{author}
						</Typography>
					)}
					<Typography sx={{ display: "flex", gap: 0.5 }} variant="caption">
						<FmdGood fontSize="small" color="primary" />
						{address}
					</Typography>
				</CardContent>
				<Box sx={{ marginTop: "auto" }}>
					<CardContent
						sx={{
							display: "flex",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: 1,
						}}
					>
						{category && (
							<Chip
								sx={{ borderRadius: 1, maxWidth: "13em" }}
								label={category}
							/>
						)}
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
