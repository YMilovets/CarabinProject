import { getTranslations } from "next-intl/server";

import { Pages, PagesList, PageType } from "@/src/shared";

export default async function getRoutes(): Promise<Array<PageType>> {
	const catalogTitle = await getTranslations("catalogPage");
	const feedbackTitle = await getTranslations("feedbackPage");
	const loginTitle = await getTranslations("loginPage");
	const signupTitle = await getTranslations("signupPage");

	const pagesConfig: Record<Pages, string> = {
		[Pages.Catalog]: catalogTitle("title"),
		[Pages.Feedback]: feedbackTitle("title"),
		[Pages.Login]: loginTitle("title"),
		[Pages.SignUp]: signupTitle("title"),
	};

	return PagesList.map(({ id, path }) => ({
		id,
		path,
		value: pagesConfig[id],
	}));
}
