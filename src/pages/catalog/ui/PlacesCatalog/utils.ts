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
	const baseURL = process.env.NEXT_PUBLIC_YNDX_MAPS_STATIC_API_URL ?? "";
	const imageURL = new URL(baseURL);

	imageURL.searchParams.append("ll", `${lat},${long}`);
	imageURL.searchParams.append(
		"size",
		`${STATIC_MAP_WIDTH},${STATIC_MAP_HEIGHT}`,
	);
	imageURL.searchParams.append("z", STATIC_MAP_ZOOM.toString());
	imageURL.searchParams.append("pt", `${lat},${long},pm2rdm`);
	imageURL.searchParams.append(
		"apikey",
		process.env.NEXT_PUBLIC_YNDX_MAPS_STATIC_API_KEY ?? "",
	);
	if (isDarkMode) {
		imageURL.searchParams.append("theme", `dark`);
	}

	return imageURL.toString();
}
