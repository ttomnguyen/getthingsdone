import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import PageLoading from "./components/feedback/PageLoading"

import { auth } from "./configs/firebase"
import SplashPage from "./containers/splashPage/SplashPage"

function App() {
	const [user, loading, error] = useAuthState(auth)

	if (loading) {
		return <PageLoading open handleClose={() => {}} />
	}
	return <SplashPage />
}

export default App
