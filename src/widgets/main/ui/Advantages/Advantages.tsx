import { Card, CardContent, Grid, Typography } from "@mui/material";

import Image from "next/image";

import { getApiURL } from "@/src/entities/catalog";
import { InvertedCardMedia } from "@/src/shared";

import { GRID_GAP, MainGridPos } from "./constants";
import { AdvantagesProps } from "./types";

function Advantages({ advantages }: AdvantagesProps) {
	return (
		<Grid container gap={GRID_GAP}>
			{advantages.map(
				({
					id,
					title,
					description,
					image: { url, alt } = { url: "", alt: "" },
				}) => (
					<Grid
						sx={{ "--Grid-parent-columnSpacing": "2.5em" }}
						key={id}
						size={MainGridPos}
					>
						<Card
							sx={{
								display: "flex",
								height: "100%",
								alignItems: "center",
								flexWrap: "wrap",
								justifyContent: "center",
							}}
						>
							<InvertedCardMedia>
								<Image
									width={96}
									height={96}
									src={new URL(url, getApiURL()).toString()}
									alt={alt}
								/>
							</InvertedCardMedia>
							<CardContent sx={{ display: "grid", gap: 1, flex: "1 0 15em" }}>
								<Typography sx={{ fontWeight: 300 }} variant="h5">
									{title}
								</Typography>
								<Typography variant="body2">{description}</Typography>
							</CardContent>
						</Card>
					</Grid>
				),
			)}
		</Grid>
	);
}

export default Advantages;
