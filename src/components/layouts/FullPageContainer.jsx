import React from "react"
import { Box } from "@mui/material"

export default function FullPageContainer({ children }) {
	return (
		<Box
			sx={{
				position: "fixed",
				width: "100vw",
				height: "100vh",
			}}
		>
			{children}
		</Box>
	)
}
