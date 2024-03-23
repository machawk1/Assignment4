
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Podcast from './Podcast';

describe('Podcast Component', () => {
  test('renders correctly with season and episode', () => {
    render(<Podcast season={1} episode={2} episodeTitle="Test Episode Title" />);
    expect(screen.getByText('Test Episode Title')).toBeInTheDocument();
    expect(screen.getByText(/Season 1Episode 2/)).toBeInTheDocument();
  });

  test('renders correctly without season', () => {
    render(<Podcast episode={3} episodeTitle="Another Test Episode" />);
    expect(screen.getByText('Another Test Episode')).toBeInTheDocument();
    expect(screen.getByText('Episode 3')).toBeInTheDocument();
  });

  test('handles season as a string gracefully', () => {
    render(<Podcast season="First" episode={4} episodeTitle="Invalid Season Test" />);
    expect(screen.getByText('Invalid Season Test')).toBeInTheDocument();
    expect(screen.getByText('Episode 4')).toBeInTheDocument();
  });
});
