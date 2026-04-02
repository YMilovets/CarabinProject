"use client";

import React, { use } from "react";
import { Paper } from "@mui/material";
import {
	MapEventUpdateHandler,
	YMapLocationRequest,
	YMapMarkerEventHandler,
} from "@yandex/ymaps3-types";
import { useDebounce } from "rooks";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import {
	setMapCoords,
	setZoom,
	useGetGeoDataMutation,
} from "@/src/entities/feedback";
import { YMapContext } from "@/src/shared";
import { useTheme } from "@/src/shared/hooks";

import { DEBOUNCE_TIME } from "../../config";
import YandexMarker from "../YandexMarker";

function YandexMapControl() {
	const reactify = use(YMapContext);

	const components = reactify?.module(ymaps3);

	const [triggerReplace] = useGetGeoDataMutation();
	const [lng, lat] = useAppSelector((state) => state.mapReducer.coords);
	const zoom = useAppSelector((state) => state.mapReducer.zoom);
	const timestamp = useAppSelector((state) => state.mapReducer.timestamp);

	const location: YMapLocationRequest = {
		center: [lng, lat],
		zoom,
	};
	const dispatch = useAppDispatch();
	const { isDarkMode } = useTheme();

	const { center } = { ...location };

	const handleDragEnd: YMapMarkerEventHandler = ([lngCoord, latCoord]) => {
		triggerReplace({ lng: lngCoord, lat: latCoord });
		dispatch(setMapCoords([lngCoord, latCoord]));
	};

	const handleZoom: MapEventUpdateHandler = useDebounce(
		({ location: newLocation }) => dispatch(setZoom(newLocation.zoom)),
		DEBOUNCE_TIME,
	);

	if (!components) return null;
	const {
		YMap,
		YMapDefaultSchemeLayer,
		YMapDefaultFeaturesLayer,
		YMapMarker,
		YMapListener,
	} = {
		...components,
	};

	return (
		<Paper sx={{ minHeight: "18rem", borderRadius: 0.75, overflow: "hidden" }}>
			<YMap
				theme={isDarkMode ? "dark" : "light"}
				location={reactify?.useDefault(location, [timestamp]) ?? location}
			>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />

				<YMapListener
					onUpdate={handleZoom}
					onClick={(_, { coordinates }) => handleDragEnd(coordinates)}
				/>
				<YMapMarker onDragEnd={handleDragEnd} draggable coordinates={center}>
					<YandexMarker />
				</YMapMarker>
			</YMap>
		</Paper>
	);
}

export default YandexMapControl;
