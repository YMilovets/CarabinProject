"use client";

import { createContext } from "react";
import { Reactify } from "@yandex/ymaps3-types/reactify";

const YMapContext = createContext<Reactify | null>(null);
const YMapControlContext = createContext<(reactify: Reactify | null) => void>(
	() => null,
);

export { YMapContext, YMapControlContext };
