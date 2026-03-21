import { ExtendButtonBase, MenuItemTypeMap } from "@mui/material";

export interface MenuItemsProps
	extends Partial<ExtendButtonBase<MenuItemTypeMap<unknown, "li">>> {
	onClose: () => void;
}
