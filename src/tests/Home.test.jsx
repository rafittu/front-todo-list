import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';

describe('Testing home page', () => {
  it('Todo page is rendering', () => {
    render(<App />);
    const todoTitle = screen.getByText(/to do/i);
    expect(todoTitle).toBeInTheDocument();
  });

  it('Users list is appearing', () => {
    render(<App />);
    const usersList = screen.getByText(/users list/i);
    expect(usersList).toBeInTheDocument();
  });

  it('Users are on the list', async () => {
    render(<App />);
    await waitForElementToBeRemoved(
      () => screen.getByText('Carregando...'),
    );

    const users = screen.getAllByTestId('user-list')[0];
    expect(users).toBeInTheDocument();
  });
});
