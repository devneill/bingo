import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the wins counter', () => {
  render(<App />);
  const winsCounter = screen.getByText(/wins/i);
  expect(winsCounter).toBeInTheDocument();
});
