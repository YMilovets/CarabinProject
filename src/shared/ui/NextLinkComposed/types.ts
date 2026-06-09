import { AnchorHTMLAttributes } from "react";

import { LinkProps } from "next/link";

export interface NextLinkComposedProps
	extends
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
		Omit<
			LinkProps,
			"href" | "as" | "passHref" | "onMouseEnter" | "onClick" | "onTouchStart"
		> {
	to: LinkProps["href"];
	linkAs?: LinkProps["as"];
}
