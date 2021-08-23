import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />));

test('renders the homepage on load', () => {
  const Element = screen.getByText(/Welcome to our page/i);
  expect(Element).toBeInTheDocument();
});

test('does not render the calculator page', () => {
  expect(() => screen.getByText(/Let's do some math!/i)).toThrowError();
});

test('renders calculator when user click on calculator link', async () => {
  fireEvent.click(screen.getByText('Calculator'));

  await waitFor(() => {
    screen.getByText('Let\'s do some math!');
  });

  expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument();
});

test('Should do math', async () => {
  fireEvent.click(screen.getByText('Calculator'));

  await waitFor(() => {
    screen.getByText('Let\'s do some math!');
  });

  fireEvent.click(screen.getByText('1'));
  await waitFor(() => {
    screen.getByText('1', { selector: '.calc-display', exact: true });
  });
  fireEvent.click(screen.getByText('+'));

  fireEvent.click(screen.getByText('2'));
  await waitFor(() => {
    screen.getByText('2', { selector: '.calc-display', exact: true });
  });

  fireEvent.click(screen.getByText('='));
  await waitFor(() => {
    screen.getByText('3', { selector: '.calc-display', exact: true });
  });

  expect(screen.getByText('3', { selector: '.calc-display', exact: true })).toBeInTheDocument();
});
