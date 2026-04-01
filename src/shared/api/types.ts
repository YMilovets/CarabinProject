import { FindCursor, ObjectId, WithId } from "mongodb";

export type Response<TBody> = {
	data: TBody;
	error: string | null;
};

export type PlacesResponse = {
	_id: ObjectId;
	category: string;
	address: string;
	coords: { lat: number; long: number };
	description: string;
	isPublished: boolean;
	date: string;
} & Document;

export type CategoriesResponse = {
	_id: string;
	count: number;
};

export type PlacesRequest = { search: string; sortBy: string; sortAt: number };

export type GeoDataRequest = { lng: number; lat: number };

export type CategoriesRequest = { search?: string };

export type CollectionDataType<TResponse> = {
	headers?: HeadersInit;
	collection: string;
	errorData?: Array<TResponse> | null;
	notFoundData?: Array<TResponse> | null;
	onSuccess?: (response: WithId<TResponse>[]) => void;
	onResponse?: (
		response: FindCursor<WithId<TResponse>>,
	) => FindCursor<WithId<TResponse>>;
};

export enum Status {
	NotFound = 404,
	Success = 200,
	ServerError = 500,
	Unauthorized = 401,
}

export type Params = { id: string };
export type RouteProps<TParam = Params> = { params: Promise<Partial<TParam>> };

export type FetchResponseType<TResponse> = Partial<{
	status: Status;
	data: TResponse | null;
	error: string | null;
}>;

export type DataResponse = {
	GeoObjectCollection: GeoObjectCollection;
};

export type GeoObjectCollection = {
	metaDataProperty: {
		GeocoderResponseMetaData: GeocoderResponseMetaData;
	};
	featureMember: FeatureMember[];
};

export type GeocoderResponseMetaData = {
	Point: {
		pos: string;
	};
	request: string;
	results: string;
	found: string;
};

export type FeatureMember = {
	GeoObject: GeoObject;
};

export type GeoObject = {
	metaDataProperty: {
		GeocoderMetaData: GeocoderMetaData;
	};
	name: string;
	description?: string;
	boundedBy: {
		Envelope: Envelope;
	};
	uri: string;
	Point: {
		pos: string;
	};
};

export type Envelope = {
	lowerCorner: string;
	upperCorner: string;
};

export type GeocoderMetaData = {
	precision: string;
	text: string;
	kind: string;
	Address: Address;
	AddressDetails: AddressDetails;
};

export type Address = {
	country_code: string;
	formatted: string;
	Components: Component[];
};

export type Component = {
	kind: string;
	name: string;
};

export type AddressDetails = {
	Country: Country;
};

export type Country = {
	AddressLine: string;
	CountryNameCode: string;
	CountryName: string;
	AdministrativeArea?: AdministrativeArea;
};

export type AdministrativeArea = {
	AdministrativeAreaName: string;
	Locality?: Locality;
};

export type Locality = {
	LocalityName: string;
	Thoroughfare?: {
		ThoroughfareName: string;
	};
	Premise?: {
		PremiseName: string;
	};
	DependentLocality?: DependentLocality;
};

export type DependentLocality = {
	DependentLocalityName: string;
	DependentLocality?: DependentLocality;
};

export type YandexGeocodeResponse = {
	response: DataResponse;
};

export interface DadataResponseType {
	suggestions: DadataSuggestion[];
}

export interface DadataSuggestion {
	value: string;
	unrestricted_value: string;
	data: DadataAddressData;
}

export interface DadataAddressData {
	geo_lat: string | null;
	geo_lon: string | null;
	region_fias_id: string;
}
