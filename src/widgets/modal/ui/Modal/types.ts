import { ReactNode } from "react";
import { DialogProps } from "@mui/material";

export interface ModalProps extends Omit<DialogProps, "open"> {
	body: ReactNode;
	onSubmitAction?: (formData: FormData) => Promise<void>;
	confirmLabel?: string;
}
