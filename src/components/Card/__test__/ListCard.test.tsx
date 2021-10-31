import { render, screen, cleanup } from '@testing-library/react';
import ListCard from '../ListCard';

afterEach(cleanup);
const data = [
  {
    id: 123,
    name: 'Test channel',
    frequency: '98.4',
  },
];
test('Render list card with data', () => {
  render(<ListCard item={data[0]} id={1} expanded={0} />);

  expect(screen.getByText(/Test channel/));
  expect(screen.getByText(/98.4/));
});

test('Render list card with play', () => {
  render(<ListCard item={data[0]} id={0} expanded={0} />);

  expect(screen.getByAltText(/open/));
});

test('Render list card without play', () => {
  render(<ListCard item={data[0]} id={1} expanded={0} />);

  expect(screen.getByAltText(/close/));
});
