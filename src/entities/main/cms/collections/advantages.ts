import { CollectionConfig } from "payload";

export const AdvantagesCollection: CollectionConfig = {
	slug: "advantage",
	labels: {
		plural: "Преимущества решения",
		singular: "элемент для преимущества решения",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "business",
			type: "array",
			label: "Преимущества для бизнеса",
			labels: {
				plural: "Преимущество для бизнеса",
				singular: "Преимущество для бизнеса",
			},
			fields: [
				{
					name: "title",
					type: "text",
					label: "Заголовок",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					label: "Описание преимущества",
					required: true,
				},
				{
					name: "image",
					type: "upload",
					label: "Загрузите изображение",
					relationTo: "media",
					maxDepth: 10,
				},
			],
		},
		{
			name: "client",
			type: "array",
			label: "Преимущества для потребителей",
			labels: {
				plural: "Преимущество для клиента",
				singular: "Преимущество для клиента",
			},
			fields: [
				{
					name: "title",
					type: "text",
					label: "Заголовок",
					required: true,
				},
				{
					name: "description",
					type: "textarea",
					label: "Описание преимущества",
					required: true,
				},
				{
					name: "image",
					type: "upload",
					label: "Загрузите изображение",
					relationTo: "media",
				},
			],
		},
	],
};
