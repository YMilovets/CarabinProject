import {
	ChangeEventHandler,
	MouseEvent,
	MouseEventHandler,
	useState,
} from "react";
import { useDebounce } from "rooks";

import { useAppDispatch } from "@/src/app/hooks";
import {
	setMapCoords,
	useGetGeoDataMutation,
	useGetGeoPositionSearchMutation,
} from "@/src/entities/feedback";

import { DEBOUNCE_TIME } from "../config";

export default function useSearchCity() {
	const dispatch = useAppDispatch();
	const [search, setSearch] = useState<string>("");

	const [triggerSearch, { data }] = useGetGeoPositionSearchMutation();
	const [triggerReplace] = useGetGeoDataMutation();

	const handleDebounceRequest = useDebounce(triggerSearch, DEBOUNCE_TIME);
	const { data: searchedData } = { ...data };

	const handleOptionClick = (
		option: string,
		onClick?: MouseEventHandler<HTMLLIElement>,
	) => {
		return (e: MouseEvent<HTMLLIElement>) => {
			const { geo_lat: lat, geo_lon: lon } = {
				...searchedData?.find(({ value }) => value === option),
			};

			if (lon && lat) {
				triggerReplace({ lng: +lon, lat: +lat });
				dispatch(setMapCoords([+lon, +lat]));
			}
			onClick?.(e);
		};
	};

	const handleChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement,
		Element
	> = (e) => {
		setSearch(e.target.value);
		handleDebounceRequest(e.target.value);
	};

	return {
		search,
		searchedData,
		handleChange,
		handleOptionClick,
	};
}
