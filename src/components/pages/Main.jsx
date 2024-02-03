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
            <picture>
              <img src="src\assets\images\1.png" alt="" />
            </picture>
          </Grid>
          <Grid item>
            <picture>
              <img src="src\assets\images\2.png" alt="" />
              </picture>    
          </Grid>
          <Grid item>
            <picture>
              <img src="src\assets\images\3.png" alt="" />
            </picture>
          </Grid>
          <Grid item>
            <picture>
              <img src="src\assets\images\4.png" alt="" />
            </picture>
          </Grid>
          <Grid item>
            <picture>
              <img src="src\assets\images\5.png" alt="" />
            </picture>
          </Grid>
          <Grid item>
            <picture>
              <img src="src\assets\images\6.png" alt="" />
            </picture>
          </Grid>
      </Grid>
    </main>
  )
}
