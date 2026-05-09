import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MODAL_PUBLICATION_SLICE_TITLE } from "../constants";

import { InitialStateModalType, ModalPayloadType } from "./types";

const initialState: InitialStateModalType = {
	isDisplayModal: false,
	placeholder: null,
};

export const {
	reducerPath: modalReducerPath,
	reducer: modalReducer,
	actions: { setModal, clearModal },
} = createSlice({
	name: MODAL_PUBLICATION_SLICE_TITLE,
	initialState,
	reducers: {
		setModal: (
			state,
			{ payload: { placeholder, id } }: PayloadAction<ModalPayloadType>,
		) => {
			state.isDisplayModal = true;
			state.id = id;
			state.placeholder = placeholder;
		},
		clearModal: (state) => {
			delete state["id"];
			state.isDisplayModal = false;
			state.placeholder = null;
		},
	},
});
