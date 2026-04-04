import { getMessages } from "next-intl/server";

import { Pages, PagesList, PageType } from "@/src/shared";

export async function getPages(): Promise<Array<PageType>> {
	const messages = await getMessages();
	const pagesConfig: Record<Pages, string> = {
		[Pages.Catalog]: messages.catalogPage.title,
		[Pages.Feedback]: messages.feedbackPage.title,
		[Pages.Login]: messages.loginPage.title,
		[Pages.SignUp]: messages.signupPage.title,
	};

	return PagesList.map(({ id, path }) => ({
		id,
		path,
		value: pagesConfig[id],
	}));
}
