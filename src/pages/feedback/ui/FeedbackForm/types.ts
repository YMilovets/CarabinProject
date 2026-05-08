import { ReactNode } from "react";

export interface FeedbackFormProps {
	children: ReactNode;
}

export type FeedbackStatus = {
	message: string;
	isSuccess?: boolean;
};
