import { ReactNode } from "react";
import { ButtonOwnProps } from "@mui/material";

export interface ButtonLinkProps extends ButtonOwnProps {
	path?: string;
	children: ReactNode;
}
