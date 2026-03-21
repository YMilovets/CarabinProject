"use client";

import React from "react";
import { Button } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLinkProps } from "./types";

function ButtonLink({ children, path }: ButtonLinkProps) {
	const pathname = usePathname();
	const isCurrent = pathname?.replace("/", "") === path;

	return (
		<Button
			variant={isCurrent ? "outlined" : "text"}
			LinkComponent={Link}
			href={path}
			sx={{
				padding: "6px 15px",
			}}
		>
			{children}
		</Button>
	);
}

export default ButtonLink;
