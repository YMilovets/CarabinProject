import { Breakpoint, useMediaQuery } from "@mui/material";

export default function useMobile(mode: Breakpoint | number = "lg") {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down(mode), {
		defaultMatches: true,
	});

	return isMobile;
}
