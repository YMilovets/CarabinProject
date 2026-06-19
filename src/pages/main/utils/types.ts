import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";
import { SystemCssProperties } from "@mui/system";

export type TextNodeType = {
	detail: number;
	format: number;
	mode: "normal";
	style: string;
	text: string;
	type: "text" | "paragraph";
	version: number;
	children: TextNodeType[];
};

export type RootTreeType = {
	children: TextNodeType[];
	direction?: null;
	format?: string;
	indent?: number;
	type: "root";
	version: number;
};

export type TypographySpanProps = Omit<
	Parameters<typeof Typography>[0],
	"sx"
> & { sx: SxProps<Theme>; component: string };

export enum FormatStyle {
	Bold = 1,
	Italic = 2,
	Strikethrough = 4,
	Underline = 8,
}

type CSSProperties = keyof SystemCssProperties<Theme>;

export type CSSFormatTuple = [
	CSSProperties,
	SystemCssProperties<Theme>[CSSProperties],
];
