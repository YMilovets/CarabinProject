import { createElement, ReactNode } from "react";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import getStylesFromFormatCode from "./getStylesFromFormatCode";
import { RootTreeType, TextNodeType, TypographySpanProps } from "./types";

export default function getNodesFromRichText(tree: RootTreeType) {
	const clonedTree = structuredClone(tree);
	const result: Array<ReactNode> = [];
	const stack: Array<RootTreeType | TextNodeType> = [clonedTree];
	let paragraphItems: Array<ReactNode> = [];

	while (stack.length > 0) {
		const lastElement = stack.at(-1);

		if (
			lastElement &&
			lastElement.children?.length === 0 &&
			lastElement.type === "paragraph"
		) {
			result.push(
				createElement(
					Typography,
					{
						key: uuidv4(),
						sx: { fontSize: "1.15rem", lineHeight: 1.5 },
					},
					paragraphItems,
				),
			);
			paragraphItems = [];
		}

		if (
			((lastElement && !lastElement?.children) || lastElement?.children) &&
			lastElement.type === "text"
		) {
			const TypographyProps: TypographySpanProps = {
				key: uuidv4(),
				component: "span",
				sx: getStylesFromFormatCode(lastElement.format),
			};

			paragraphItems.push(
				createElement(Typography, TypographyProps, lastElement.text),
			);
		}

		if (
			lastElement &&
			(!lastElement?.children || lastElement.children.length === 0)
		) {
			stack.pop();
			continue;
		}

		const currentElem = lastElement?.children.shift();
		if (currentElem) {
			stack.push(currentElem);
		}
	}

	return result;
}
