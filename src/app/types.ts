import { setupStore } from "./store";
export const { getState, dispatch } = setupStore();

export type RootState = ReturnType<typeof getState>;
export type AppDispatch = typeof dispatch;
