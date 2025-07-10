/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App'; 

it('renders login header', () => {
    render(<App />);
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
});
