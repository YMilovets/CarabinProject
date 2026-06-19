import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import sharp from "sharp";
import { ru } from "@payloadcms/translations/languages/ru";
import { en } from "@payloadcms/translations/languages/en";

export default buildConfig({
	editor: lexicalEditor(),
	collections: [],
	secret: process.env.PAYLOAD_SECRET || "",
	db: mongooseAdapter({
		url: new URL("payloadCMS", process.env.DB_HOST).toString(),
	}),
	sharp,
	i18n: { supportedLanguages: { en, ru } },
});
