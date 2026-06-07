import { ReactNode } from "react";

import { UserType } from "@/src/shared/api";

export interface PrivateObserverProps {
	children: ReactNode;
	selectedRole: UserType["role"];
}
