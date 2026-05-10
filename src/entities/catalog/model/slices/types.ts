export type InitialStateSearchType = {
	search: string;
};

export type InitialStateSortingType = {
	sortBy: string;
	sortAt: number;
};

export type InitialStateCategoriesType = {
	selectCategories: Record<string, boolean>;
};
