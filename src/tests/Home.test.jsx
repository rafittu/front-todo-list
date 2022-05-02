import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testing home page', () => {
  render(<App />);
  it('Todo page is rendering', () => {
    const todoTitle = screen.getByText(/todo list/i);
    expect(todoTitle).toBeInTheDocument();
  });

  it('Users list is appearing', () => {
    const usersList = screen.getByTestId('user-list');
    expect(usersList).toBeInTheDocument();
  });
});
