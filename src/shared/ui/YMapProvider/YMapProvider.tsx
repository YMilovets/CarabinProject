"use client";

import React, { useState } from "react";
import { Reactify } from "@yandex/ymaps3-types/reactify";

import { YMapProviderProps } from "./types";
import { YMapContext, YMapControlContext } from "./YMapContext";

function YMapProvider({ children }: YMapProviderProps) {
	const [reactify, setReactify] = useState<Reactify | null>(null);

	return (
		<YMapContext value={reactify}>
			<YMapControlContext value={setReactify}>{children}</YMapControlContext>
		</YMapContext>
	);
}

export default YMapProvider;
