import { useAppDispatch, useAppSelector } from "@/src/app/hooks";
import {
	setSearchQuery,
	setSortingAtQuery,
	setSortingByQuery,
} from "@/src/entities/catalog";

export default function useCatalogParams() {
	const search = useAppSelector((state) => state.searchReducer.search);
	const sortBy = useAppSelector((state) => state.sortingReducer.sortBy);
	const sortAt = useAppSelector((state) => state.sortingReducer.sortAt);

	const selectedCategories = useAppSelector(
		(state) => state.selectedCategoryReducer.selectCategories,
	);

	const dispatch = useAppDispatch();

	const params = new Map();
	if (search) params.set("search", search);
	if (sortAt !== 0 && sortBy) {
		params.set("sortBy", sortBy);
		params.set("sortAt", sortAt);
	}
	params.set(
		"categories",
		Object.keys(selectedCategories).filter(
			(selectedId) => selectedCategories[selectedId],
		),
	);

	const handleSearch = (searchValue: string) => {
		dispatch(setSearchQuery(searchValue));
	};

	const handleSortByQuery = (column: string) => {
		dispatch(setSortingByQuery(column));
	};

	const handleSortAtQuery = (order: number) => {
		dispatch(setSortingAtQuery(order));
	};

	return {
		search,
		sortAt,
		sortBy,
		params,
		selectedCategories,
		handleSearch,
		handleSortByQuery,
		handleSortAtQuery,
	};
}
