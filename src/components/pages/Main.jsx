import * as React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transparent',
  border: 'none',
  outline: 'none',
};

export default function Main() {
  const [open, setOpen] = React.useState(false);
  // create a state to store the image src when clicked to open the right modal
  const [imageSrc, setImageSrc] = React.useState('');
  const handleOpen = (e) => {
    setOpen(true);
    setImageSrc(e.target.src);
    };
  const handleClose = () => setOpen(false);

  // create an array of numbers from 1 to 24 because we have 24 images with that naming convention
  const imagesList = Array.from(Array(24).keys(), (i) => i + 1);

  return (
    <div className='mt-5'>
      <Grid
        container
        spacing={{ xs: 10, sm: 15, md: 15, lg: 30}}
        justifyContent="center"
        alignItems="center"
        >
        {imagesList.map((image, index) => (
          <Grid item key={index} xs={10} sm={10} md={5}>
            <picture>
              <img className='w-100 img-item' src={`./images/works/${image}.webp`} alt="image" onClick={handleOpen} />
            </picture>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="image magnified"
                aria-describedby="image magnified"
            >
              <Box sx={style}>
                <button className='btn-close' onClick={handleClose}></button>
                <picture className='modal-picture'>
                  <img className='modal-img' src={imageSrc} />
                </picture>
              </Box>
            </Modal>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
