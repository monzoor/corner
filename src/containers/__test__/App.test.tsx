import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from '..';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders initial app view', () => {
  render(<App />);
  const linkElement = screen.getByText(/Not playing to anything/i);
  expect(linkElement).toBeInTheDocument();
});

test('Clicking on channel name to play', () => {
  render(<App />);
  const channelListButton = screen.getByTestId('ChannelToPlay1');

  fireEvent.click(channelListButton);

  expect(screen.getByAltText(/open/));
  expect(screen.getByText(/CURRENTLY PLAYING/));
});

test('Clicking on channel to stop', () => {
  render(<App />);
  const channelListButton = screen.getByTestId('ChannelToPlay1');

  fireEvent.click(channelListButton);
  fireEvent.click(channelListButton);

  expect(screen.getByText(/Not playing to anything/));
});
