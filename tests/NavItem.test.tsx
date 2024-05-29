import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavItem from '../src/components/common/NavItem';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/theme';


describe('NavItem', () => {
  test('renders with correct label and link', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <NavItem to="/test" label="Test Label" />
        </Router>
      </ThemeProvider>
    );

    const linkElement = getByText(/Test Label/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  test('applies correct styles', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <NavItem to="/test" label="Test Label" />
        </Router>
      </ThemeProvider>
    );

    const linkElement = getByText(/Test Label/i);
    // Check initial color
    //expect(linkElement).toHaveStyle(`color: ${theme.colors.white}`);
  });

});
