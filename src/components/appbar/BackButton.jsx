import React from "react"
import { IconButton } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

export default function BackButton(params) {
	return (
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			<ArrowBack />
		</IconButton>
	)
}
