import React from "react"
import { Backdrop, CircularProgress } from "@mui/material"

export default function PageLoading({ open, onClose }) {
	return (
		<Backdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
			onClick={onClose}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}
