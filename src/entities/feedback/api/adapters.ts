import { createEntityAdapter } from "@reduxjs/toolkit";

import { Response } from "@/src/shared";
import { DadataResponseType } from "@/src/shared/api/types";

import { DadataMergedResponseType } from "./types";

const geoPositionAdapter = createEntityAdapter();
const initialState = geoPositionAdapter.getInitialState({
	data: [],
	error: null,
});

export function convertToDadataSuggestionArrayAdapter(
	response: Response<DadataResponseType>,
): Response<Array<DadataMergedResponseType>> {
	const { suggestions } = response.data;
	return geoPositionAdapter.setAll(
		{
			...initialState,
			data: suggestions
				.filter(({ data: { geo_lat, geo_lon } }) => geo_lat && geo_lon)
				.map(({ unrestricted_value, value, data }) => ({
					...data,
					unrestricted_value,
					value,
				})),
		},
		suggestions.map(({ data: { region_fias_id }, value }) => ({
			id: region_fias_id,
			type: value,
		})),
	);
}
