import { PhotoCamera } from '@mui/icons-material';
import { Grid, IconButton, styled } from '@mui/material';
import { useState } from 'react';

function Upload() {
  const [imageSrc, setImageSrc] = useState<string>('#');
  const Input = styled('input')({
    display: 'none',
  });
  const handleUpload = (event: any) => {
    const source = URL.createObjectURL(event.target.files[0]);
    setImageSrc(source);
  };
  return (
    <Grid container sx={{ height: '80vh' }}>
      <Grid item sm={6}>
        <label htmlFor='icon-button-file'>
          <Input id='icon-button-file' type='file' onChange={handleUpload} />
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <iframe title='upload' src={imageSrc} width='100%' height='500px' />
      </Grid>
      <Grid item sm={6}></Grid>
    </Grid>
  );
}

export default Upload;
