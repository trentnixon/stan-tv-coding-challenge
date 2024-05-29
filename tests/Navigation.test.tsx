import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../src/components/layout/Navigation';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/theme';

describe('Navigation', () => {
  test('renders navigation items', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
        </Router>
      </ThemeProvider>
    );

    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/TV Shows/i)).toBeInTheDocument();
    expect(getByText(/Movies/i)).toBeInTheDocument();
  });
});
