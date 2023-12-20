import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart';
 
describe('Cart component', () => {
  test('renders without errors', () => {
    const { container } = render(
      <Cart cartItems={[]} onRemoveFromCart={() => {}} onEmptyCart={() => {}} />
    );
    expect(container).toBeInTheDocument();
  });
 
  test('displays "Empty Cart" button and calls onEmptyCart when clicked', () => {
    const onEmptyCartMock = jest.fn();
    const { queryByText, getByText } = render(
      <Cart cartItems={[]} onRemoveFromCart={() => {}} onEmptyCart={onEmptyCartMock} />
    );
 
    // Check if "Empty Cart" button is displayed
    const emptyCartButton = queryByText('Empty Cart');
    expect(emptyCartButton).toBeNull(); // Expect it to be null when the cart is empty
 
    // Add items to the cart
    render(
      <Cart
        cartItems={[{ modelName: 'Old-Fashioned', size: 'Desktop', color: 'Chrome', price: 49.99 }]}
        onRemoveFromCart={() => {}}
        onEmptyCart={onEmptyCartMock}
      />
    );
 
    // Check again if "Empty Cart" button is displayed
    expect(getByText('Empty Cart')).toBeInTheDocument();
 
    // Click the "Empty Cart" button
    fireEvent.click(getByText('Empty Cart'));
 
    // Check if onEmptyCart is called
    expect(onEmptyCartMock).toHaveBeenCalled();
  });
 
  test('updates customer name input correctly', async () => {
    
  });
 
  
});
 