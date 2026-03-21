import { HTMLAttributes, ReactNode } from "react";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  errorContainer?: ReactNode;
  sendBtnTitle?: ReactNode;
  children: ReactNode;
}