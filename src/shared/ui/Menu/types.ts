import { ReactNode } from "react";
import { PopoverOrigin, TooltipProps } from "@mui/material";

export interface MenuProps {
	isOpen: boolean;
	buttonId?: string;
	menuId?: string;
	tooltipTitle?: ReactNode;
	anchorEl: HTMLElement | null;
	menuChildren: Array<ReactNode>;
	horizontalTransform?: PopoverOrigin["horizontal"];
	anchorTransform?: PopoverOrigin["horizontal"];
	ariaLabel?: string;
	buttonRenderFn: (
		isOpen: boolean,
		ariaLabel?: string,
		buttonId?: string,
	) => TooltipProps["children"];
	onClose: () => void;
	className?: string;
}
