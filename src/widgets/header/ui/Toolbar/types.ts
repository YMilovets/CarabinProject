import { ReactNode } from "react";
import { AppBarOwnProps } from "@mui/material";

export interface ToolbarProps extends AppBarOwnProps {
	children: ReactNode;
}
