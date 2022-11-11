import React, { useState } from "react"
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Home, Store } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"

export default function BottomNav({ value }) {
	const [page, setPage] = useState(value)
	return (
		<Paper
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation
				showLabels
				value={page}
				onChange={(event, newPage) => {
					setPage(newPage)
				}}
			>
				<BottomNavigationAction
					component={RouterLink}
					label="Home"
					icon={<Home />}
					to="admin"
				/>
				<BottomNavigationAction
					component={RouterLink}
					label="Stores"
					icon={<Store />}
					to="stores"
				/>
			</BottomNavigation>
		</Paper>
	)
}
