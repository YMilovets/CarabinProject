import React from "react";
import { Box } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { Pages, SessionObserver } from "@/src/shared";

import getRoutes from "../../utils";
import ButtonLink from "../ButtonLink";

async function Navigation() {
	const routes = await getRoutes();
	const t = await getTranslations("loginPage");

	return (
		<Box>
			{routes.map(({ id, value, path }) => {
				return (
					<ButtonLink path={path} key={id}>
						{value}
					</ButtonLink>
				);
			})}
			<SessionObserver>
				<ButtonLink path={Pages.Login}>{t("title")}</ButtonLink>
			</SessionObserver>
		</Box>
	);
}

export default Navigation;
