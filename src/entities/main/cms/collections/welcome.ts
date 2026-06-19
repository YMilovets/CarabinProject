import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const WelcomeCollection: CollectionConfig = {
	slug: "welcome",
	labels: {
		plural: "Блок приветствия",
		singular: "блок приветствия",
	},
	access: {
		read: () => true,
	},
	fields: [
		{ name: "title", type: "text", label: "Заголовок" },
		{
			name: "description",
			type: "richText",
			label: "Общее представление сайта",
			editor: lexicalEditor({}),
		},
		{
			name: "catalogButton",
			type: "text",
			label: "Название кнопки перехода в каталог",
		},
		{
			name: "postButton",
			type: "text",
			label: "Название кнопки добавления нового места",
		},
	],
};
