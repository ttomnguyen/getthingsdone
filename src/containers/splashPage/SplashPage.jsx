import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import PlaylistIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import Typography from '@mui/material/Typography';
import GoogleButton from 'react-google-button';

import googleSignin from './googleSignin';

export default function () {
  return (
    <Box
      sx={{
        width: '100vw',
      }}
    >
      <Grid
        container
        direction="column"
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <PlaylistIcon sx={{ fontSize: 160 }} />
        </Grid>
        <Grid item>
          <Typography variant="h6">Get Things Done</Typography>
        </Grid>
        <Grid item>
          <GoogleButton onClick={() => googleSignin()} />
        </Grid>
      </Grid>
    </Box>
  );
}
