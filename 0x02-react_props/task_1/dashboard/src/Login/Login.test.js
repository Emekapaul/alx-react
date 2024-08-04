import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

describe('Login Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Login />);
        expect(container).toBeInTheDocument();
    });

    test('renders 2 input tags', () => {
        const { container } = render(<Login />);
        const inputTags = container.querySelectorAll('input');
        expect(inputTags.length).toBe(2);
    });

    test('renders 2 label tags', () => {
        const { container } = render(<Login />);
        const labelTags = container.querySelectorAll('label');
        expect(labelTags.length).toBe(2);
    });
})