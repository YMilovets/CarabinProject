import { Box, FormControl, SxProps, Theme, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { getApiURL } from "@/src/entities/catalog";
import { WELCOME_PATH } from "@/src/entities/main";
import { ButtonLink } from "@/src/features/header";
import { Pages } from "@/src/shared";

import { getNodesFromRichText } from "../utils";

import BusinessAdvantages from "./BusinessAdvantages";
import ClientAdvantages from "./ClientAdvantages";

async function fetchWelcome() {
	const t = await getTranslations("common");
	const response = await fetch(`${getApiURL()}/${WELCOME_PATH}`);

	if (!response.ok) {
		throw new Error(t("errorServer"));
	}

	return await response.json();
}

const styles: SxProps<Theme> = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "calc(3.75em + 60px) 3.75em 7.5em",
	minHeight: "100vh",
	gap: 6.5,
};

async function Main() {
	const {
		docs: [{ title, description, catalogButton, postButton }],
	} = await fetchWelcome();

	return (
		<Box sx={styles}>
			<Typography
				sx={{ textAlign: "center", fontWeight: 300, mt: 7.5 }}
				variant="h3"
			>
				{title}
			</Typography>
			<Box
				sx={{
					textAlign: "center",
					maxWidth: 1160,
					lineHeight: "1.5em",
					display: "grid",
					gap: 1.5,
				}}
			>
				{getNodesFromRichText(description.root)}
			</Box>

			<FormControl
				sx={{
					gap: "1em",
					flexDirection: "row",
					flexWrap: "wrap",
					display: "flex",
				}}
			>
				<ButtonLink
					sx={{ flex: "1 0", minWidth: "30ch" }}
					path={Pages.Catalog}
					size="large"
					variant="contained"
				>
					{catalogButton}
				</ButtonLink>
				<ButtonLink
					sx={{ flex: "1 0", minWidth: "30ch" }}
					path={Pages.Feedback}
					size="large"
					variant="outlined"
				>
					{postButton}
				</ButtonLink>
			</FormControl>

			<Box>
				<BusinessAdvantages />
				<ClientAdvantages />
			</Box>
		</Box>
	);
}

export default Main;
