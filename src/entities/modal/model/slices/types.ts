export type InitialStateModalType = {
	isDisplayModal: boolean;
} & ModalPayloadType;

export type ModalPayloadType = {
	id?: string;
	placeholder: Record<string, string> | null;
};
