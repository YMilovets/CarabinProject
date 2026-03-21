import { useId } from "react";

export default function useProfileId(generalId: string = "profile") {
	const id = useId();
	const buttonId = `${generalId}-btn-${id.replace(/\D/g, "")}`;
	const menuId = `${generalId}-menu-${id.replace(/\D/g, "")}`;

	return { buttonId, menuId };
}
