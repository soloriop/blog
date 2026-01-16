import { render, screen } from '@testing-library/react';
import MainContent from './components/MainContent';

test('renders learn react link', () => {
  render(<MainContent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
