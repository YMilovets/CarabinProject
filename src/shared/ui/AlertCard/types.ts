import { ReactNode } from "react";

export interface AlertCardProps {
	title: string;
	body: string;
	children?: ReactNode;
	controlComponents?: ReactNode;
}
