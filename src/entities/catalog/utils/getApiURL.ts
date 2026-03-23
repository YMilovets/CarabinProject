export default function getApiURL() {
	return new URL(
		process.env.NEXT_PUBLIC_API_PATH ?? "",
		process.env.NEXT_PUBLIC_API_URL,
	).toString();
}
