import { AppBar, Toolbar, Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComfhirerCaller from './components/caller/ComfhirerCaller';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/layout/Layout';
import Upload from './components/upload/Upload';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Dashboard /> },
      {
        path: 'caller',
        element: <ComfhirerCaller />,
      },
      {
        path: 'upload',
        element: <Upload />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Comfhirer
          </Typography>
        </Toolbar>
      </AppBar>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
