import { render, screen } from '@testing-library/react';
import App from './App';

test('is hello world present', () => {
  render(<App />);
  const helloWorld = screen.getByText(/Hello World/i);
  expect(helloWorld).toBeInTheDocument();
  console.log(helloWorld.outerHTML)
});

test('image is present', () => {
  render(<App/>);
  const imagePresent = screen.getByTestId(/image/i)
  expect(imagePresent).not.toBe(false)
  expect(imagePresent).toBeVisible()
});