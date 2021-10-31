import { render, screen, cleanup } from '@testing-library/react';
import PlayCard from '../PlayCard';

afterEach(cleanup);

test('Render play card with data', () => {
  const data = {
    id: 123,
    name: 'Test channel',
    frequency: '98.4',
  };
  render(<PlayCard item={data} />);

  expect(screen.getByText(/CURRENTLY PLAYING/));
});

test('Render play card with data', () => {
  const data = {};
  render(<PlayCard item={data} />);

  expect(screen.getByText(/Not playing to anything/));
});
