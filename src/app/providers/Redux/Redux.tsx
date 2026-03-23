"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { setupStore } from "../../store";

import { ReduxProps } from "./types";

function Redux({ children }: ReduxProps) {
	return <ReduxProvider store={setupStore()}>{children}</ReduxProvider>;
}

export default Redux;
