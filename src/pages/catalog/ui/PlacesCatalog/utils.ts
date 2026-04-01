import {
	STATIC_MAP_HEIGHT,
	STATIC_MAP_WIDTH,
	STATIC_MAP_ZOOM,
} from "./constants";

export default function getStaticYandexImageURL(
	lat: number,
	long: number,
	isDarkMode: boolean,
) {
	const params = new URLSearchParams();

	params.append("ll", `${lat},${long}`);
	params.append("size", `${STATIC_MAP_WIDTH},${STATIC_MAP_HEIGHT}`);
	params.append("z", STATIC_MAP_ZOOM.toString());
	params.append("pt", `${lat},${long},pm2rdm`);
	params.append(
		"apikey",
		process.env.NEXT_PUBLIC_YNDX_MAPS_STATIC_API_KEY ?? "",
	);
	if (isDarkMode) {
		params.append("theme", `dark`);
	}

	return `${
		process.env.NEXT_PUBLIC_YNDX_MAPS_STATIC_API_URL
	}?${params.toString()}`;
}
