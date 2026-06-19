import { Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { fetchAdvantages } from "@/src/entities/main";
import { Advantages } from "@/src/widgets/main";

async function ClientAdvantages() {
	const {
		docs: [{ client }],
	} = await fetchAdvantages();

	const t = await getTranslations("mainPage");

	return (
		<>
			<Typography
				variant="h4"
				sx={{
					width: "100%",
					display: "grid",
					justifyItems: "center",
					fontWeight: 300,
					mt: 4,
					mb: 1.5,
				}}
			>
				{t("clientAdvantages")}
			</Typography>

			<Advantages advantages={client} />
		</>
	);
}

export default ClientAdvantages;
