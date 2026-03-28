import { Response, YandexGeocodeResponse } from "@/src/shared";

export function getAddressFromGeocodeResponse(
	response: Response<YandexGeocodeResponse>,
) {
	const {
		data: {
			response: {
				GeoObjectCollection: {
					featureMember: [currentFeatureMember],
				},
			},
		},
	} = response;

	const {
		GeoObject: {
			metaDataProperty: {
				GeocoderMetaData: {
					Address: { formatted: address },
				},
			},
		},
	} = { ...currentFeatureMember };

	return address;
}
