import React from "react";
import { MenuItem } from "@mui/material";
import { useTranslations } from "next-intl";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Pages, SessionObserver } from "@/src/shared";

import { useRoutes } from "../../hooks";

import { MenuItemsProps } from "./types";

function MenuItems({ onClose, ...props }: MenuItemsProps) {
	const routes = useRoutes();
	const pathname = usePathname();
	const t = useTranslations("loginPage");
	const sT = useTranslations("signupPage");

	const isLoginPage = pathname?.replace("/", "") === Pages.Login;
	const iSignUpPage = pathname?.replace("/", "") === Pages.SignUp;

	return (
		<>
			{routes.map(({ id, value, path }) => {
				const isCurrent = pathname?.replace("/", "") === path;
				return (
					<MenuItem
						{...props}
						onClick={onClose}
						key={id}
						selected={isCurrent}
						href={path ?? ""}
						component={Link}
					>
						{value}
					</MenuItem>
				);
			})}
			<SessionObserver>
				<MenuItem
					{...props}
					onClick={onClose}
					selected={isLoginPage}
					href={Pages.Login}
					component={Link}
				>
					{t("title")}
				</MenuItem>
				<MenuItem
					{...props}
					onClick={onClose}
					selected={iSignUpPage}
					href={Pages.SignUp}
					component={Link}
				>
					{sT("title")}
				</MenuItem>
			</SessionObserver>
		</>
	);
}

export default MenuItems;
