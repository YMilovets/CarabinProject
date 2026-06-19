import { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
	slug: "media",
	labels: {
		plural: "Загрузка изображений",
		singular: "изображения",
	},
	access: {
		read: () => true,
	},
	upload: {
		staticDir: "assets",
		imageSizes: [
			{
				name: "icon",
				width: 64,
				height: 64,
				position: "centre",
			},
		],
		adminThumbnail: "icon",
		mimeTypes: ["image/*"],
	},
	fields: [
		{
			name: "alt",
			type: "text",
			label: "Сопровождающий текст для изображения",
			required: true,
		},
	],
};
