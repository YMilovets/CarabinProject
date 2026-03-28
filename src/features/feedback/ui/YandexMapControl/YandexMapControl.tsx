import React from "react";
import { FmdGood } from "@mui/icons-material";
import { Paper, Tooltip } from "@mui/material";
import {
	YMapLocationRequest,
	YMapMarkerEventHandler,
} from "@yandex/ymaps3-types";

import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import { setMapCoords, useGetGeoDataMutation } from "@/src/entities/feedback";

import { FRACTION_DIGIT, ZOOM } from "./constants";
import { YandexMapControlProps } from "./types";

function YandexMapControl({ reactify }: YandexMapControlProps) {
	const components = reactify?.module(ymaps3);

	const [triggerReplace] = useGetGeoDataMutation();
	const [lng, lat] = useAppSelector((state) => state.mapReducer.coords);
	const location: YMapLocationRequest = {
		center: [lng, lat],
		zoom: ZOOM,
	};
	const dispatch = useAppDispatch();

	const { center } = { ...location };

	const handleDragEnd: YMapMarkerEventHandler = ([lngCoord, latCoord]) => {
		triggerReplace({ lng: lngCoord, lat: latCoord });
		dispatch(setMapCoords([lngCoord, latCoord]));
	};

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
			<YMap location={reactify?.useDefault(location) ?? location}>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />
				<YMapListener
					onClick={(_, { coordinates }) => handleDragEnd(coordinates)}
				/>
				<YMapMarker
					onDragEnd={handleDragEnd}
					draggable
					coordinates={center}
					mapFollowsOnDrag
				>
					<Tooltip
						title={`Широта: ${lat.toFixed(
							FRACTION_DIGIT,
						)}, долгота: ${lng.toFixed(FRACTION_DIGIT)}`}
					>
						<FmdGood fontSize="large" color="error" />
					</Tooltip>
				</YMapMarker>
			</YMap>
		</Paper>
	);
}

export default YandexMapControl;
