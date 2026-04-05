export default function getStaticYandexImageURL(
	lat: number,
	long: number,
	isDarkMode: boolean,
) {
	const pathAPI = process.env.NEXT_PUBLIC_API_PATH ?? "";
	const imageURL = new URL(`${pathAPI}/image`, location.origin);

	imageURL.searchParams.append("lat", lat.toString());
	imageURL.searchParams.append("long", long.toString());
	if (isDarkMode) {
		imageURL.searchParams.append("isDarkMode", "1");
	}

	return imageURL.toString();
}
