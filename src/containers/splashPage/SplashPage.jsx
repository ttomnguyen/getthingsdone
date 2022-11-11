import React from "react"
import { Box, Stack } from "@mui/material"
import PlaylistIcon from "@mui/icons-material/PlaylistAddCheckCircle"
import Typography from "@mui/material/Typography"
import GoogleButton from "react-google-button"

import googleSignin from "./googleSignin"
import FullPageContainer from "../../components/layouts/FullPageContainer"

export default function () {
	return (
		<FullPageContainer>
			<Stack
				sx={{ width: "100%", height: "100%" }}
				spacing={4}
				justifyContent="center"
				alignItems="center"
			>
				<PlaylistIcon sx={{ fontSize: 300 }} />
				<Typography variant="h4">Get Things Done</Typography>
				<GoogleButton onClick={() => googleSignin()} />
			</Stack>
		</FullPageContainer>
	)
}
