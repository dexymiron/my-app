import { render, screen } from '@testing-library/react';
import App from './App';
import MainApp from './App';

test('renders learn react link', () => {
  render(<MainApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
