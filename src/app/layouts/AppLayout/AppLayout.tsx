import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/src/widgets/header";

import "../../styles";

import styles from "./AppLayout.module.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | КАРАБИН - каталог адресов",
		default: "КАРАБИН - каталог адресов",
	},
	description:
		"КАРАБИН - каталог адресов для анализа возможного открытия нового заведения и развития бизнеса в сфере услуг",
};

export const viewport = {
	content: "initial-scale=1, width=device-width",
};

function AppLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ru">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<main className={styles.main}>
						<Header />
						{children}
					</main>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

export default AppLayout;
