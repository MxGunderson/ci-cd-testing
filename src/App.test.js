import { render, screen } from '@testing-library/react';
import App from './App';

test('is hello world present', () => {
  render(<App />);
  const helloWorld = screen.getByText(/Hello World/i);
  expect(helloWorld).toBeInTheDocument();
  console.log(helloWorld.outerHTML)
});
