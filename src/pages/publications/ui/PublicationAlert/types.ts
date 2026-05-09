import { ReactNode } from "react";
import { AlertProps } from "@mui/material";

export interface PublicationAlertProps extends AlertProps {
	children: ReactNode;
	headerTitle?: ReactNode;
}
