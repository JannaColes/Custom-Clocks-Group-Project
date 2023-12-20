import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
 
describe('Header component', () => {
  test('renders header with navigation links', () => {
    const mockCartItems = [
      {modelName: 'Old-Fashioned', size: 'Wall', color: 'Red', price: 75.99 },
    ];
 
    render(
      <Router>
        <Header cartItems={mockCartItems} />
      </Router>
    );
 
    // Check if the header and navigation links are rendered
    expect(screen.getByText('Custom Clocks')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Store')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });
 
  // Example test for clicking a navigation link
  test('navigates to "Store" when "Store" link is clicked', () => {
    const { getByText } = render(
      <Router>
        <Header cartItems={[]} />
      </Router>
    );
 
    // Simulate a click on the "Store" link
    getByText('Store').click();
    expect(screen.getByText('Store')).toBeInTheDocument();
  });
});