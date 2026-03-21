import React from "react";
import { Box } from "@mui/material";

import getRoutes from "../../utils";
import ButtonLink from "../ButtonLink";
import SignButton from "../SignButton";

async function Navigation() {
	const routes = await getRoutes();

	return (
		<Box>
			{routes.map(({ id, value, path }) => {
				return (
					<ButtonLink path={path} key={id}>
						{value}
					</ButtonLink>
				);
			})}
			<SignButton />
		</Box>
	);
}

export default Navigation;
