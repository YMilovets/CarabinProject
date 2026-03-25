import { Theme } from "@mui/material";

export function getStyles(theme: Theme) {
	return {
		display: "flex",
		gap: 1,
		overflow: "hidden",
		position: "relative",
		"&:after": {
			content: "''",
			position: "absolute",
			top: 0,
			right: 0,
			width: 20,
			height: "100%",
			background: `linear-gradient(to right, 
      transparent, ${theme.palette.background.default})`,
			zIndex: 1,
		},
	};
}
