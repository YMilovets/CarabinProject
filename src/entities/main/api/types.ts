type PayloadCMSResponse<TDocument> = {
	docs: TDocument;
};

export type AdvantagesType = {
	id: string;
	title: string;
	description: string;
	image?: { url: string; alt: string };
};

export type AdvantagesResponse = PayloadCMSResponse<
	Array<{
		business: Array<AdvantagesType>;
		client: Array<AdvantagesType>;
	}>
>;
