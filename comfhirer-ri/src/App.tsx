import { AppBar, Toolbar, Typography } from '@mui/material';
import ComfhirerCaller from './components/ComfhirerCaller';

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
      <main style={{ margin: '2rem' }}>
        <ComfhirerCaller />
      </main>
    </div>
  );
}

export default App;
