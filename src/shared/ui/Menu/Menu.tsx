import React from "react";
import { Box, Menu as MenuUI, Tooltip } from "@mui/material";

import { MenuStyle } from "./constants";
import { MenuProps } from "./types";

function Menu({
	buttonRenderFn,
	onClose,
	tooltipTitle,
	isOpen,
	buttonId,
	menuId,
	anchorEl,
	ariaLabel,
	menuChildren,
	anchorTransform = "right",
	horizontalTransform = "right",
	className,
}: MenuProps) {
	return (
		<>
			<Box>
				<Tooltip title={tooltipTitle}>
					{buttonRenderFn(isOpen, ariaLabel, buttonId)}
				</Tooltip>
			</Box>
			<MenuUI
				open={isOpen}
				anchorEl={anchorEl}
				onClose={onClose}
				id={menuId}
				slotProps={{
					paper: {
						elevation: 0,
						sx: MenuStyle,
					},
				}}
				transformOrigin={{
					horizontal: horizontalTransform,
					vertical: "top",
				}}
				anchorOrigin={{ horizontal: anchorTransform, vertical: "bottom" }}
				className={className}
			>
				{menuChildren}
			</MenuUI>
		</>
	);
}

export default Menu;
