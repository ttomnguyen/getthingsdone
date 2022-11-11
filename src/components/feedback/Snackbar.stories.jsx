import React from "react"

import Snackbar from "./Snackbar"

export default {
	title: "Snackbar",
	component: Snackbar,
	argTypes: {},
}

const Template = (args) => <Snackbar {...args} />

export const ErrorSnackbar = Template.bind()
ErrorSnackbar.args = {
	open: true,
	onClose: () => {},
	message: "This is an error",
	severity: "error",
}
