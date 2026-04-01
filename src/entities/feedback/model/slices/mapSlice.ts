import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LngLat } from "@yandex/ymaps3-types";

import { DEFAULT_COORDS, MAP_SLICE_TITLE, ZOOM } from "../constants";

import { InitialStateMapType } from "./types";

const initialState: InitialStateMapType = {
	zoom: ZOOM,
	coords: DEFAULT_COORDS,
	address: null,
};

export const {
	reducer: mapFeedbackReducer,
	reducerPath: mapFeedbackReducerPath,
	actions: { setMapCoords, setAddress, setZoom, setTimestamp },
} = createSlice({
	initialState,
	name: MAP_SLICE_TITLE,
	reducers: {
		setMapCoords: (state, { payload }: PayloadAction<LngLat>) => {
			state.coords = payload;
		},
		setAddress: (state, { payload }: PayloadAction<string>) => {
			state.address = payload;
		},
		setZoom: (state, { payload }: PayloadAction<number>) => {
			state.zoom = payload;
		},
		setTimestamp: (state, { payload }: PayloadAction<number>) => {
			state.timestamp = payload;
		},
	},
});
