
import { render, screen, fireEvent } from '@testing-library/react';
import Store from "./Store"; 


test('handles model change correctly', () => {
  // Render the Store component
  render(<Store />);
 
  // Get the label element
  const modelLabel = screen.getByText(/Choose a model:/i);
 
  // Find the associated select element using a query selector
  const modelSelector = modelLabel.parentElement.querySelector('select');
 
  // Change the selection in the model selector
  fireEvent.change(modelSelector, { target: { value: '2' } });
 
  // Verify that the selected value is updated
  expect(modelSelector.value).toBe('2');
});