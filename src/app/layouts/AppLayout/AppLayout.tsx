import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/src/widgets/header";

import { ProfileProvider, ThemeProvider } from "../../providers";
import MainLayout from "../MainLayout/MainLayout";

import "../../styles";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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

	return (
		<html lang={locale}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<NextIntlClientProvider messages={messages}>
					<ProfileProvider>
						<AppRouterCacheProvider options={{ enableCssLayer: true }}>
							<ThemeProvider>
								<MainLayout>
									<Header />
									{children}
								</MainLayout>
							</ThemeProvider>
						</AppRouterCacheProvider>
					</ProfileProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

export default AppLayout;
