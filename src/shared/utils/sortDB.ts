import { FindCursor } from "mongodb";

import { SortOrder } from "../types";

export default function sortDB<TResponse extends FindCursor>(
	sortBy: string,
	sortAt: number,
) {
	return (data: TResponse) => {
		if (!sortBy || sortAt === SortOrder.Default) return data;
		return data.sort({
			[sortBy]: sortAt >= SortOrder.Asc ? SortOrder.Asc : SortOrder.Desc,
		});
	};
}
