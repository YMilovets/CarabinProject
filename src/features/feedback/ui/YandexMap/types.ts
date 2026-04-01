import { ReactNode } from "react";
import { Reactify } from "@yandex/ymaps3-types/reactify";

export interface YandexMapProps {
	titleComponent?: ReactNode;
	errorComponent?: ReactNode;
}

export type SDKType = {
	reactify: Reactify;
	ymaps3: typeof ymaps3;
};
