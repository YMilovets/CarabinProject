const initialDateTimeFormat: Intl.DateTimeFormatOptions = {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
};

export default function formatDate(
	datetime: string,
	locales = "en-GB",
	dateTimeFormat = initialDateTimeFormat,
) {
	return Intl.DateTimeFormat(locales, dateTimeFormat).format(
		new Date(datetime),
	);
}
