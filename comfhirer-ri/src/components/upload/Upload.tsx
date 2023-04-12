import { PhotoCamera, SwapHorizontalCircleRounded } from '@mui/icons-material';
import { Paper, IconButton, styled } from '@mui/material';
import {
  Fragment,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
} from 'react';

const Input = styled('input')({
  display: 'none',
});
const FlexBox = styled('div')(({ theme }) => ({
  height: '80vh',
  display: 'flex',
  width: '100%',
  iframe: {
    border: '1px solid' + theme.palette.secondary.main,
  },
}));
function Upload() {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [paperWidth, setPaperWidth] = useState<number>(500);
  const isSwiping = useRef<boolean>(false);
  const startingPoint = useRef<number>(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const startDragging = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isSwiping.current) {
      const distance = startingPoint.current - event.clientX;
      startingPoint.current = event.clientX;
      const newWidth = paperWidth + distance;

      requestRef.current = requestAnimationFrame(() => setPaperWidth(newWidth));
    }
  };

  return (
    <Fragment>
      <label htmlFor='icon-button-file' style={{ position: 'absolute' }}>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <PhotoCamera fontSize='large' />
        </IconButton>
        <Input
          id='icon-button-file'
          type='file'
          onChange={(event) => handleUpload(event, setImageSrc)}
        />
      </label>
      <FlexBox>
        <iframe title='upload' src={imageSrc} width='100%' />
        <button
          style={{
            backgroundColor: 'white',
            margin: '0 5px',
            border: 'none',
            cursor: 'pointer',
            alignSelf: 'center',
          }}
          onMouseDown={(event) =>
            handleMouseDown(event, isSwiping, startingPoint)
          }
          onMouseUp={() => (isSwiping.current = false)}
          onMouseLeave={() => (isSwiping.current = false)}
          onMouseMove={startDragging}
        >
          <SwapHorizontalCircleRounded
            sx={{ alignSelf: 'center' }}
            fontSize='large'
            color='secondary'
          />
        </button>

        <Paper sx={{ minWidth: paperWidth + 'px' }}></Paper>
      </FlexBox>
    </Fragment>
  );
}

const handleUpload = (
  event: ChangeEvent<HTMLInputElement>,
  setImageSrc: Dispatch<React.SetStateAction<string>>
) => {
  const source =
    event.target.files?.[0] && URL.createObjectURL(event.target.files?.[0]);
  if (source) setImageSrc(source);
};

const handleMouseDown = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  isSwiping: React.MutableRefObject<boolean>,
  startingPoint: React.MutableRefObject<number>
) => {
  isSwiping.current = true;
  startingPoint.current = event.clientX;
};

export default Upload;
