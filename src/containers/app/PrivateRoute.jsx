import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from "react-router-dom"
import { auth } from "../../configs/firebase"

export default function PrivateRoute({ children }) {
	const [user] = useAuthState(auth)

	if (!user) {
		return <Navigate to="/" />
	}

	return children
}
