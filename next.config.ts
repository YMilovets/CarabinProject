import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: String(process.env.NEXT_PUBLIC_URL),
			},
		],
	},
	allowedDevOrigins: [String(process.env.NEXT_PUBLIC_URL)],
};
const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");

export default withPayload(withNextIntl(nextConfig));
