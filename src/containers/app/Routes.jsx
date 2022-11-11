import React from "react"
import { createBrowserRouter } from "react-router-dom"
import AdminDashboardPage from "../admin/AdminDashboardPage"

import SplashPage from "../splashPage/SplashPage"
import StoresPage from "../stores/StoresPage"

export default createBrowserRouter([
	{
		path: "/",
		element: <SplashPage />,
	},
	{
		path: "/admin",
		element: <AdminDashboardPage />,
		children: [
			{
				path: "stores",
				element: <StoresPage />,
			},
		],
	},
])
