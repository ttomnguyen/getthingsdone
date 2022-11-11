import React from "react"
import AppBar from "../../components/appbar/AppBar"
import FullPageContainer from "../../components/layouts/FullPageContainer"
import BottomNav from "../../components/appbar/BottonNav"

export default function AdminDashboardPage() {
	return (
		<FullPageContainer>
			<AppBar titleProps={{ title: "Dashboard" }} />
			<BottomNav />
		</FullPageContainer>
	)
}
