import React from "react"

import PageLoading from "./PageLoading"

export default {
	title: "PageLoading",
	component: PageLoading,
	argTypes: {},
}

const Template = (args) => <PageLoading {...args} />

export const FullPageLoading = Template.bind()
FullPageLoading.args = {
	open: true,
	onClose: () => {},
}
