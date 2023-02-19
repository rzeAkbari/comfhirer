import {
  CoffeeMaker,
  Dashboard,
  LocalFireDepartmentSharp,
} from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

function FixedDrawer() {
  const FixedBox = styled(Box)({
    position: 'fixed',
    left: 0,
    top: 64,
    height: '200px',
    width: '60px',
    display: 'flex',
    flexFlow: 'column',
    paddingTop: '2rem',
    justifyContent: 'space-between',
  });
  return (
    <FixedBox>
      <Link to='/' style={{ alignSelf: 'center' }} aria-label='dashboard'>
        <Dashboard color='secondary' fontSize='large' />
      </Link>
      <Link to='caller' style={{ alignSelf: 'center' }} aria-label='caller'>
        <LocalFireDepartmentSharp color='secondary' fontSize='large' />
      </Link>
    </FixedBox>
  );
}

export default FixedDrawer;
