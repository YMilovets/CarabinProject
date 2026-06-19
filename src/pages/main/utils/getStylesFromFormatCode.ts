import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

import { CSSFormatTuple, FormatStyle } from "./types";

const FormatStyleList: Record<FormatStyle, CSSFormatTuple> = {
	[FormatStyle.Bold]: ["fontWeight", "bold"],
	[FormatStyle.Italic]: ["fontStyle", "italic"],
	[FormatStyle.Strikethrough]: ["textDecoration", "line-through"],
	[FormatStyle.Underline]: ["textDecoration", "underline"],
};

export default function getStylesFromFormatCode(
	formatCode: number,
): SxProps<Theme> {
	let commonStyles: CSSFormatTuple[] = [];
	const FormatCodes = Object.values(FormatStyle);

	for (const code of FormatCodes) {
		if (typeof code !== "string" && (formatCode & +code) !== 0) {
			commonStyles = [...commonStyles, FormatStyleList[code]];
		}
	}

	return Object.fromEntries(commonStyles);
}
