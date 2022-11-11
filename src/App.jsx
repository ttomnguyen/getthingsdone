import React, { useState } from "react"
import { RouterProvider } from "react-router-dom"
import Routes from "./containers/app/Routes"

function App() {
	return <RouterProvider router={Routes} />
}

export default App
