import { Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { fetchAdvantages } from "@/src/entities/main";
import { Advantages } from "@/src/widgets/main";

async function BusinessAdvantages() {
	const {
		docs: [{ business }],
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
					mb: 1.5,
				}}
			>
				{t("businessAdvantages")}
			</Typography>
			<Advantages advantages={business} />
		</>
	);
}

export default BusinessAdvantages;
