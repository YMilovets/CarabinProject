import { useColorScheme } from "@mui/material";

export default function useTheme() {
	const { mode, setMode } = useColorScheme();
	const handleChange = () => setMode(isDarkMode ? "light" : "dark");
	const isDarkMode = mode === "dark";

	return { isDarkMode, handleChange, setMode };
}
