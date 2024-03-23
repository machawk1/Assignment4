
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Song from './Song';

describe('Song Component', () => {
  test('renders correctly with valid data', () => {
    render(<Song title="Wonderful Song" artist="A Great Artist" year={2020} />);
    expect(screen.getByText('Wonderful Song')).toBeInTheDocument();
    expect(screen.getByText('Artist: A Great Artist')).toBeInTheDocument();
    expect(screen.getByText('Year: 2020')).toBeInTheDocument();
  });


  test('handles year as a string gracefully', () => {
    render(<Song title="Year Type Test" artist="Test Artist" year="2020" />);
    expect(screen.getByText('Year Type Test')).toBeInTheDocument();
    expect(screen.getByText('Artist: Test Artist')).toBeInTheDocument();
    expect(screen.getByText('Year: 2020')).toBeInTheDocument();
  });
});

