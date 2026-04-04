import { useTranslations } from "next-intl";

import { Pages, PagesList, PageType } from "@/src/shared";

export default function useRoutes(): Array<PageType> {
	const catalogPage = useTranslations("catalogPage")("title");
	const feedbackTitle = useTranslations("feedbackPage")("title");
	const loginTitle = useTranslations("loginPage")("title");
	const signupTitle = useTranslations("signupPage")("title");

	const pagesConfig: Record<Pages, string> = {
		[Pages.Catalog]: catalogPage,
		[Pages.Feedback]: feedbackTitle,
		[Pages.Login]: loginTitle,
		[Pages.SignUp]: signupTitle,
	};

	return PagesList.map(({ id, path }) => ({
		id,
		path,
		value: pagesConfig[id],
	}));
}
