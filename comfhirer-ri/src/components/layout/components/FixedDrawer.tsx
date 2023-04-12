import {
  AttachFile,
  Dashboard,
  LocalFireDepartmentSharp,
} from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const FixedBox = styled(Box)(({ theme }) => ({
  left: 0,
  top: 0,
  height: '100%',
  width: '60px',
  display: 'flex',
  flexFlow: 'column',
  paddingTop: '2rem',
  justifyContent: 'start',
  backgroundColor: theme.palette.primary.dark,
  zIndex: 0,
}));

const LinkStyler = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  margin: '1rem',
  border: '1px solid green',
  borderRight: '0px',
  borderRadius: '30% 0',
  marginRight: '-1px',
  background: 'white',
  padding: '3px',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
function FixedDrawer() {
  return (
    <FixedBox>
      <LinkStyler>
        <NavLink
          className={({ isActive }) => (isActive ? '' : undefined)}
          to='/'
          aria-label='dashboard'
        >
          <Dashboard color='secondary' fontSize='large' />
        </NavLink>
      </LinkStyler>
      <LinkStyler>
        <NavLink
          className={({ isActive }) => (isActive ? 'bg-green' : undefined)}
          to='caller'
          aria-label='caller'
        >
          <LocalFireDepartmentSharp color='secondary' fontSize='large' />
        </NavLink>
      </LinkStyler>
      <LinkStyler>
        <NavLink
          className={({ isActive }) => (isActive ? '' : undefined)}
          to='upload'
          aria-label='upload'
        >
          <AttachFile color='secondary' fontSize='large' />
        </NavLink>
      </LinkStyler>
    </FixedBox>
  );
}

export default FixedDrawer;
