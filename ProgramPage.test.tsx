import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProgramPage from '../src/pages/Program';
import { DataProvider } from '../src/contexts/DataContext';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/theme';

jest.mock('../src/contexts/DataContext', () => ({
  useData: jest.fn()
}));

describe("ProgramPage", () => {
  const mockUseData = require('../src/contexts/DataContext').useData;

  const mockProgram = {
    id: 1,
    title: 'Test Program',
    description: 'Test description',
    type: 'series',
    image: 'test-image.jpg',
    rating: 'PG',
    genre: 'Drama',
    year: 2021,
    language: 'English'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders program details', async () => {
    mockUseData.mockReturnValue({
      programs: [mockProgram],
      loading: false,
      error: null
    });

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/program/1']}>
          <Routes>
            <Route path="/program/:id" element={<ProgramPage />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Program')).toBeInTheDocument();
      expect(screen.getByText('Test description')).toBeInTheDocument();
      expect(screen.getByText('Drama')).toBeInTheDocument();
      expect(screen.getByText('2021')).toBeInTheDocument();
      expect(screen.getByText('PG')).toBeInTheDocument();
      expect(screen.getByText('English')).toBeInTheDocument();
    });
  });

   test('navigates back to home on backspace press', async () => {
    mockUseData.mockReturnValue({
      programs: [mockProgram],
      loading: false,
      error: null
    });

    const { container } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/program/1']}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/program/:id" element={<ProgramPage />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.keyDown(container, { key: 'Backspace', code: 'Backspace' });

    expect(await screen.findByText(/home page/i)).toBeInTheDocument();
  });
});
