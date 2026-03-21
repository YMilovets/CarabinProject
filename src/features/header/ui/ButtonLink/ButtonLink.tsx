import React from "react";
import { Button } from "@mui/material";

import Link from "next/link";

import { ButtonLinkProps } from "./types";

function ButtonLink({ children, path, ...props }: ButtonLinkProps) {
	return (
		<Button
			{...props}
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
