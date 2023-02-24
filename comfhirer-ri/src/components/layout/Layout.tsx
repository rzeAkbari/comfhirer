import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import FixedDrawer from './components/FixedDrawer';

function Layout() {
  return (
    <section>
      <Grid container>
        <Grid item>
          <FixedDrawer />
        </Grid>
        <Grid height={'100vh'} item sm={11}>
          <main style={{ margin: '2rem 2rem 2rem 90px' }}>
            <Outlet />
          </main>
        </Grid>
      </Grid>
    </section>
  );
}

export default Layout;
