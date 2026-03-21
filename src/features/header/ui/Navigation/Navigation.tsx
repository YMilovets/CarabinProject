"use client";

import React from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { usePathname } from "next/navigation";

import { Pages } from "@/src/shared";

import { useRoutes } from "../../hooks";
import ButtonLink from "../ButtonLink";

function Navigation() {
	const routes = useRoutes();
	const pathname = usePathname();
	const { data } = useSession();
	const t = useTranslations("loginPage");

	const isLoginPath = pathname?.replace("/", "") === Pages.Login;

	return (
		<Box>
			{routes.map(({ id, value, path }) => {
				const isCurrent = pathname?.replace("/", "") === path;
				return (
					<ButtonLink
						variant={isCurrent ? "outlined" : "text"}
						path={path}
						key={id}
					>
						{value}
					</ButtonLink>
				);
			})}
			{!data && (
				<ButtonLink
					variant={isLoginPath ? "outlined" : "text"}
					path={Pages.Login}
				>
					{t("title")}
				</ButtonLink>
			)}
		</Box>
	);
}

export default Navigation;
