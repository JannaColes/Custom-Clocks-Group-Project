import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
 
describe('Home component', () => {
  test('renders home component with expected content', () => {
    const images = ['images/BigBen.jpg'];
 
    render(
      <Router>
        <Home images={images} />
      </Router>
    );
 
    // Check if the Slideshow component is rendered
    const slideshow = screen.queryByText(/Time for a new look/i);
    expect(slideshow).toBeInTheDocument();
 
    // Check if the Styleicon component is rendered
    expect(screen.getByText("What's Your Style")).toBeInTheDocument();
 
    // Check if the Trendingicon components are rendered
    expect(screen.getByText('Now Trending: Hello,')).toBeInTheDocument();
    expect(screen.getByText('Now Trending: Less is More')).toBeInTheDocument();
 
    // Check if the Home-famous-clocks component is rendered
    const bigBenImage = screen.getByRole('img', { name: 'slide-0' });
    expect(bigBenImage).toBeInTheDocument();
    expect(bigBenImage).toHaveAttribute('alt', 'slide-0');
 
    expect(screen.getByText('Big Ben. Big Deal!')).toBeInTheDocument();
    
    // Check if the Link to "Get Inspired" is rendered
    const link = screen.getByText('Get Inspired');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://hermleclock.com/blogs/news/timekeeping-masterpieces-the-top-10-most-iconic-clocks-in-the-world');
    expect(link).toHaveAttribute('target', '_blank');
  });
});