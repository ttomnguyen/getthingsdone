import React from "react"
import AppBar from "../../components/appbar/AppBar"
import BottomNav from "../../components/appbar/BottonNav"
import FullPageContainer from "../../components/layouts/FullPageContainer"

export default function StoresPage(params) {
	return (
		<FullPageContainer>
			<AppBar titleProps={{ title: "Stores" }} />
			<BottomNav />
		</FullPageContainer>
	)
}
