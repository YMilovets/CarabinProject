import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { Header } from "@/src/widgets/header";

import { ProfileProvider, ReduxProvider, ThemeProvider } from "../../providers";
import MainLayout from "../MainLayout";

import "../../styles";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["cyrillic"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["cyrillic"],
});

export async function generateMetadata(): Promise<Metadata> {
	const messages = await getMessages();
	return {
		title: {
			template: messages.common.title,
			default: messages.mainPage.title,
		},
		description: messages.common.description,
	};
}

export const viewport = {
	content: "initial-scale=1, width=device-width",
};

async function AppLayout({ children }: LayoutProps<"/">) {
	const messages = await getMessages();
	const locale = await getLocale();

	const recaptchaAPI = process.env.NEXT_PUBLIC_RECAPTCHA_SCRIPT;
	const recaptchaURL = new URL(recaptchaAPI ?? "");
	recaptchaURL.searchParams.append(
		"render",
		process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
	);

	return (
		<html lang={locale}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{recaptchaAPI && (
					<Script strategy="beforeInteractive" src={recaptchaURL.toString()} />
				)}
				<NextIntlClientProvider messages={messages}>
					<ProfileProvider>
						<AppRouterCacheProvider options={{ enableCssLayer: true }}>
							<ThemeProvider>
								<ReduxProvider>
									<MainLayout>
										<Header />
										{children}
									</MainLayout>
								</ReduxProvider>
							</ThemeProvider>
						</AppRouterCacheProvider>
					</ProfileProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

export default AppLayout;
