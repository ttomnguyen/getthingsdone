import React from "react"

import AdminDashboardPage from "./AdminDashboardPage"

export default {
	title: "AdminDashboardPage",
	component: AdminDashboardPage,
	argTypes: {},
}

const Template = (args) => <AdminDashboardPage {...args} />

export const Page = Template.bind()
Page.args = {}
