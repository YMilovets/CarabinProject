import { MenuItemProps } from "@mui/material";

import { LinkProps } from "next/link";

export interface MenuLinkProps
	extends
		MenuItemProps,
		Omit<LinkProps, "onClick" | "onTouchStart" | "onMouseEnter"> {}
