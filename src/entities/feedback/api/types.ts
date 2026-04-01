import { DadataAddressData, DadataSuggestion } from "@/src/shared/api";

export type DadataMergedResponseType = Omit<DadataSuggestion, "data"> &
	DadataAddressData;
