import React from 'react'
import Grid from '@mui/material/Grid';

export default function Main() {

  // create an array of numbers from 1 to 24 because we have 24 images with that naming convention
  const imagesList = Array.from(Array(24).keys(), (i) => i + 1);

  return (
    <main>
      <Grid
        container
        spacing={20}
        justifyContent="center"
        alignItems="center"
        className="p-2"
        >
        {imagesList.map((image, index) => (
          <Grid item key={index} xs={6}>
            <picture>
              <img className='w-100' src={`src/assets/images/works/${image}.webp`} alt="image" />
            </picture>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}
