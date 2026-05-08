import { ReactNode } from "react";

export interface PlacesCardProps {
	imageComponent?: ReactNode;
	date: string;
	title: string;
	category?: string;
	description?: string;
	moreBtnComponent?: ReactNode;
	address: string;
	author?: string;
}
