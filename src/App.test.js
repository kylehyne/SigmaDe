// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SigmaDeFi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SigmaDeFi/i);
    expect(titleElement).toBeInTheDocument();
});
