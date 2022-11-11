import React from "react"
import { Alert, Snackbar, Typography } from "@mui/material"

export default function ({ open, onClose, message, severity }) {
	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
			<Alert severity={severity} sx={{ width: "100%" }}>
				<Typography variant="h5">{message}</Typography>
			</Alert>
		</Snackbar>
	)
}
