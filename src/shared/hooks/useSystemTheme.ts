import { useEffect, useRef } from "react";
import { useColorScheme, useMediaQuery } from "@mui/material";

export default function useSystemTheme() {
	const { setMode } = useColorScheme();

	const isLoaded = useRef(false);

	const isDarkMatches = useMediaQuery("(prefers-color-scheme: dark)");

	useEffect(() => {
		if (!isLoaded.current) {
			isLoaded.current = true;
			return;
		}
		setMode(isDarkMatches ? "dark" : "light");
	}, [isDarkMatches]);
}
