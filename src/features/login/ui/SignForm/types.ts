import { FormHTMLAttributes, ReactNode } from "react";

export interface SignFormProps extends FormHTMLAttributes<HTMLFormElement> {
	children?: ReactNode;
}
