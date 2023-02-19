import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  it('should have working drawer', async () => {
    render(<App />);

    const title = await screen.findByRole('banner');
    const callerLink = await screen.findByRole('link', { name: 'caller' });
    const dashboardLink = await screen.findByRole('link', {
      name: 'dashboard',
    });

    let dashboard = await screen.findByTestId('dashboard');
    expect(dashboard).toBeVisible();

    userEvent.click(callerLink);
    const caller = await screen.findByTestId('caller');
    expect(caller).toBeVisible();

    userEvent.click(dashboardLink);
    dashboard = await screen.findByTestId('dashboard');
    expect(dashboard).toBeVisible();

    expect(title).toBeVisible();
  });
});
