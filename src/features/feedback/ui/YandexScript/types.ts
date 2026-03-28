import { Reactify } from "@yandex/ymaps3-types/reactify";

export interface YandexScriptsProps {
	onLoad: (params: { reactify: Reactify; ymaps3: typeof ymaps3 }) => void;
	onError?: (error: string) => void;
}
