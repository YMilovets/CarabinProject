import { ReactNode } from "react";

export interface PlacesCardProps {
	url?: string;
	alt?: string;
	date: string;
	title: string;
	category?: string;
	description: string;
	moreBtnComponent?: ReactNode;
	address: string;
}
