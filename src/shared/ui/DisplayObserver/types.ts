import { ReactNode } from "react";
import { Breakpoint } from "@mui/material";

export interface DisplayObserverProps {
	isMobileMode?: boolean;
	width?: Breakpoint | number;
	children: ReactNode;
}
