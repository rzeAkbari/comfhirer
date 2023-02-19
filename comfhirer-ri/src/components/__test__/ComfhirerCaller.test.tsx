import { render, screen } from '@testing-library/react';
import ComfhirerCaller from '../ComfhirerCaller';

describe('Comfhirer Caller', () => {
  it('should have correct elements', async () => {
    render(<ComfhirerCaller />);
    const multiLine = await screen.findByRole('textbox');
    const button = await screen.findByRole('button', { name: 'Check' });

    expect(multiLine).toBeVisible();
    expect(button).toBeVisible();
  });
});
