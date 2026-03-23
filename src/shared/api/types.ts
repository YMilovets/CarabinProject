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
	image: {
		url: string;
		alt?: string;
	};
	description: string;
	isPublished: boolean;
	date: string;
} & Document;

export type PlacesRequest = { search: string; sortBy: string; sortAt: number };

export type CollectionDataType<TResponse> = {
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
}

export type Params = { id: string };
export type RouteProps<TParam = Params> = { params: Promise<Partial<TParam>> };

export enum SortOrder {
	Asc = 1,
	Desc = -1,
	Default = 0,
}
