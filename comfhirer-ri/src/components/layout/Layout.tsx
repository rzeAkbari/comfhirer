import { Outlet } from 'react-router-dom';
import FixedDrawer from './components/FixedDrawer';

function Layout() {
  return (
    <section>
      <FixedDrawer />
      <main style={{ margin: '2rem 2rem 2rem 90px' }}>
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
