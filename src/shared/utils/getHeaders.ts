export default function getHeaders(...appendHeaders: Array<[string, string]>) {
	const headers = new Headers([["Content-Type", "application/json"]]);

	if (process.env.NODE_ENV === "development") {
		headers.append("Access-Control-Allow-Origin", "*");
	}

	if (process.env.NODE_ENV !== "development") {
		headers.append(
			"Access-Control-Allow-Origin",
			process.env.NEXTAUTH_URL ?? "*",
		);
	}

	if (appendHeaders.length > 0) {
		appendHeaders.forEach((currentHeader) => {
			headers.append(...currentHeader);
		});
	}

	return headers;
}
