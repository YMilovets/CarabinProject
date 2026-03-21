import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export default function useMobile(mode: Breakpoint | number = "lg") {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(mode));

	return isMobile;
}
