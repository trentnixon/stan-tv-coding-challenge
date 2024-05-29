import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Carousel from '../src/components/carousel/Carousel';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/theme';
import { DataProvider } from '../src/contexts/DataContext';

describe('Carousel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders error state', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));

    render(
      <ThemeProvider theme={theme}>
        <Router>
          <DataProvider>
            <Carousel filter={() => true} />
          </DataProvider>
        </Router>
      </ThemeProvider>
    );

    await screen.findByText(/An unknown error occurred. Please try again later./i);
  });

  test('renders programs', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, title: 'Test Program 1', image: 'test-image-1.jpg' },
            { id: 2, title: 'Test Program 2', image: 'test-image-2.jpg' },
            { id: 3, title: 'Test Program 3', image: 'test-image-3.jpg' },
            { id: 4, title: 'Test Program 4', image: 'test-image-4.jpg' },
            { id: 5, title: 'Test Program 5', image: 'test-image-5.jpg' },
            { id: 6, title: 'Test Program 6', image: 'test-image-6.jpg' },
            { id: 7, title: 'Test Program 7', image: 'test-image-7.jpg' },
          ]),
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: {
          get: (name: string) => 'application/json',
        },
        redirected: false,
        type: 'basic',
        url: '',
        clone: function () {
          return this;
        },
        body: null,
        bodyUsed: false,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
        blob: () => Promise.resolve(new Blob()),
        formData: () => Promise.resolve(new FormData()),
        text: () => Promise.resolve(''),
      } as Response)
    );

    render(
      <ThemeProvider theme={theme}>
        <Router>
          <DataProvider>
            <Carousel filter={() => true} />
          </DataProvider>
        </Router>
      </ThemeProvider>
    );

    expect(await screen.findByAltText(/Test Program 1/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/Test Program 2/i)).toBeInTheDocument();
  });

  test('handles keyboard navigation', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, title: 'Test Program 1', image: 'test-image-1.jpg' },
            { id: 2, title: 'Test Program 2', image: 'test-image-2.jpg' },
            { id: 3, title: 'Test Program 3', image: 'test-image-3.jpg' },
            { id: 4, title: 'Test Program 4', image: 'test-image-4.jpg' },
            { id: 5, title: 'Test Program 5', image: 'test-image-5.jpg' },
            { id: 6, title: 'Test Program 6', image: 'test-image-6.jpg' },
            { id: 7, title: 'Test Program 7', image: 'test-image-7.jpg' },
          ]),
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: {
          get: (name: string) => 'application/json',
        },
        redirected: false,
        type: 'basic',
        url: '',
        clone: function () {
          return this;
        },
        body: null,
        bodyUsed: false,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
        blob: () => Promise.resolve(new Blob()),
        formData: () => Promise.resolve(new FormData()),
        text: () => Promise.resolve(''),
      } as Response)
    );

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <DataProvider>
            <Carousel filter={() => true} />
          </DataProvider>
        </Router>
      </ThemeProvider>
    );

    const carousel = container.querySelector('div') as Element; // Ensure the targeted element exists

    fireEvent.keyDown(carousel, { key: 'ArrowRight', code: 'ArrowRight' });

    const image = await screen.findByAltText(/Test Program 2/i);
    expect((image as HTMLImageElement).src).toContain('test-image-2.jpg?resize=720px:*');
  });
});
