import React from "react"
import { Box, AppBar as MAppBar, Toolbar, Typography } from "@mui/material"

export default function AppBar({ leadingIconButton, titleProps }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<MAppBar>
				<Toolbar>
					{leadingIconButton}
					<Typography variant={titleProps.variant || "h6"}>
						{titleProps.title}
					</Typography>
				</Toolbar>
			</MAppBar>
		</Box>
	)
}
