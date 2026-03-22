import { ObjectId, WithId } from "mongodb";

export type Response<TBody> = {
	data: TBody;
	error: string | null;
};

export type PlacesResponse = {
	_id: ObjectId;
	category: string;
	address: string;
	coords: { lat: number; long: number };
	image: string;
	description: string;
	isPublished: true;
	date: string;
} & Document;

export type CollectionDataType<TResponse> = {
	collection: string;
	errorData?: Array<TResponse> | null;
	notFoundData?: Array<TResponse> | null;
	onSuccess?: (response: WithId<TResponse>[]) => void;
};

export enum Status {
	NotFound = 404,
	Success = 200,
	ServerError = 500,
}

export type Params = { id: string };
export type RouteProps<TParam = Params> = { params: Promise<Partial<TParam>> };
