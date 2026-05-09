import { PageType } from "./types";

export enum Pages {
	Catalog = "catalog",
	Login = "login",
	Feedback = "feedback",
	SignUp = "signup",
}

export const ProfileRoute = "/profile";
export const PublicationsRoute = "/publications";

export const PagesList: Array<Omit<PageType, "value">> = [
	{
		id: Pages.Catalog,
		path: "catalog",
	},
	{
		id: Pages.Feedback,
		path: "feedback",
	},
];
