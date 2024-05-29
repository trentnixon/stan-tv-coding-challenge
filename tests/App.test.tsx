import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('App', () => {
  test('renders without crashing', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([
      {
        id: 1,
        title: "Test Program",
        description: "Test Description",
        type: "series",
        image: "test-image.jpg",
        rating: "PG",
        genre: "Drama",
        year: 2021,
        language: "English"
      }
    ]));

    const { findByText } = render(<App />);
    
    // Check if the "Home" link is present
    expect(await findByText(/Home/i)).toBeInTheDocument();
  });
});
