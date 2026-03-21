import React from "react";
import { MenuItem } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useRoutes } from "../../hooks";

import { MenuItemsProps } from "./types";

function MenuItems({ onClose, ...props }: MenuItemsProps) {
	const routes = useRoutes();
	const pathname = usePathname();

	return routes.map(({ id, value, path }) => {
		const isCurrent = pathname?.replace("/", "") === path;
		return (
			<MenuItem
				{...props}
				onClick={onClose}
				key={id}
				selected={isCurrent}
				href={path ?? ""}
				component={Link}
			>
				{value}
			</MenuItem>
		);
	});
}

export default MenuItems;
