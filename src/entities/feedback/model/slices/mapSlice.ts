import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LngLat } from "@yandex/ymaps3-types";

import { DEFAULT_COORDS, MAP_SLICE_TITLE } from "../constants";

const initialState: { coords: LngLat; address?: string | null } = {
	coords: DEFAULT_COORDS,
	address: null,
};

export const {
	reducer: mapFeedbackReducer,
	reducerPath: mapFeedbackReducerPath,
	actions: { setMapCoords, setAddress },
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
	},
});
