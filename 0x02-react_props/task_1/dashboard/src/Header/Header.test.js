import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe('Header Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Header />);
        expect(container).toBeInTheDocument();
    });

    test('renders the img tag', () => {
        const { container } = render(<Header />);
        const img = container.querySelector('img');
        expect(img).toBeInTheDocument();
    });

    test('renders the h1 tag', () => {
        const { container } = render(<Header />);
        const h1 = container.querySelector('h1');
        expect(h1).toBeInTheDocument();
    });
})