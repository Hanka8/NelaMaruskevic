import React from 'react'
import Grid from '@mui/material/Grid';

export default function Main() {
  return (
    <main>
      <Grid
        container 
        spacing={3}
        justifyContent={'center'}
        alignItems={'center'}
        >
          <Grid item>
              <img src="src\assets\images\1.png" alt="" />
          </Grid>
          <Grid item>
              <img src="src\assets\images\2.png" alt="" />
          </Grid>
          <Grid item>
              <img src="src\assets\images\3.png" alt="" />
          </Grid>
          <Grid item>
              <img src="src\assets\images\4.png" alt="" />
          </Grid>
          <Grid item>
              <img src="src\assets\images\5.png" alt="" />
          </Grid>
          <Grid item>
              <img src="src\assets\images\6.png" alt="" />
          </Grid>
      </Grid>
    </main>
  )
}
