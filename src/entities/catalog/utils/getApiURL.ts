export default function getApiURL() {
	if (process.env.NEXTAUTH_URL) {
		return new URL(
			process.env.NEXT_PUBLIC_API_PATH ?? "",
			process.env.NEXTAUTH_URL,
		).toString();
	}
	return process.env.NEXT_PUBLIC_API_PATH ?? "";
}
