import { LngLat } from "@yandex/ymaps3-types";

export type InitialStateMapType = {
	coords: LngLat;
	address?: string | null;
	timestamp?: number;
	zoom: number;
};
