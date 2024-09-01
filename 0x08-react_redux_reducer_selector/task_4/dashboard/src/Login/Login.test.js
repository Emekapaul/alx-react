import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Login />);
        expect(container).toBeInTheDocument();
    });

    test('renders 2 input tags', () => {
        const { container } = render(<Login />);
        const inputTags = container.querySelectorAll('input');
        expect(inputTags.length).toBe(3);
    });

    test('renders 2 label tags', () => {
        const { container } = render(<Login />);
        const labelTags = container.querySelectorAll('label');
        expect(labelTags.length).toBe(2);
    });

    test('Submit button is disabled by default', () => {
        render(<Login />);

        // Check if the submit button is disabled
        const submitInput = screen.getByRole('button', { name: /ok/i });
        expect(submitInput).toBeDisabled();
    });

    test('Submit button is enabled after entering email and password', () => {
        render(<Login />);

        // Get the email and password input elements
        const emailInput = screen.getByLabelText(/email:/i);
        const passwordInput = screen.getByLabelText(/password:/i);

        // Enter email and password
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Check if the submit button is enabled
        const submitInput = screen.getByRole('button', { name: /ok/i });
        expect(submitInput).toBeEnabled();
    });
});