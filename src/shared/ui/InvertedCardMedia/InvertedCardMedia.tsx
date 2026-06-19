"use client";

import { CardMedia } from "@mui/material";

import { InvertedCardMediaProps } from "./types";

function InvertedCardMedia({ children }: InvertedCardMediaProps) {
	return (
		<CardMedia
			sx={(theme) => {
				if (theme.palette.mode === "dark")
					return {
						m: 2.5,
						filter: "invert()",
					};
				return { m: 2.5 };
			}}
		>
			{children}
		</CardMedia>
	);
}

export default InvertedCardMedia;
