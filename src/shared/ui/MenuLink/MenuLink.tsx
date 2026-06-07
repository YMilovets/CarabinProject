"use client";

import React from "react";
import { MenuItem } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuLinkProps } from "./types";

function MenuLink({ children, href, onClick, ...props }: MenuLinkProps) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<MenuItem
			onClick={onClick}
			selected={isActive}
			href={href}
			component={Link}
			{...props}
		>
			{children}
		</MenuItem>
	);
}

export default MenuLink;
