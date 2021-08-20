import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render the brand name', () => {
  render(<App />);
  const Element = screen.getByText(/Math Magicians/i);
  expect(Element).toBeInTheDocument();
});
