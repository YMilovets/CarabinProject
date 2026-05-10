import { InitialStateCategoriesType } from "./types";

export function setStatusCategories(
	state: InitialStateCategoriesType,
	payload: Array<string>,
	isAllVisible = false,
) {
	const prevSelectedCategories = state.selectCategories;
	state.selectCategories = {};

	payload.forEach(
		(categoryId) =>
			(state.selectCategories[categoryId] =
				isAllVisible || prevSelectedCategories[categoryId]),
	);
}
