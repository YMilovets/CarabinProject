import { Box, Link, Toolbar, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

import { MobileMenu, Navigation } from "@/src/features/header";
import { ThemeControl } from "@/src/features/main";
import { UserProfile } from "@/src/features/profile";
import {
	DisplayObserver,
	NextLinkComposed,
	SessionObserver,
} from "@/src/shared";

import ToolbarContainer from "../Toolbar";

async function Header() {
	const t = await getTranslations("common");

	return (
		<ToolbarContainer>
			<Toolbar variant="regular">
				<Typography noWrap variant="h5">
					<Link
						sx={{ mr: 3, color: "inherit", fontWeight: 500 }}
						to="/"
						component={NextLinkComposed}
					>
						{t("logo")}
					</Link>
				</Typography>
				<DisplayObserver isMobileMode={false}>
					<MobileMenu />
				</DisplayObserver>
				<DisplayObserver>
					<Navigation />
				</DisplayObserver>
				<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
					<DisplayObserver width={500}>
						<ThemeControl />
					</DisplayObserver>
					<SessionObserver isAuthentificated>
						<UserProfile />
					</SessionObserver>
				</Box>
			</Toolbar>
		</ToolbarContainer>
	);
}

export default Header;
