import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe('Footer Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Footer />);
        expect(container).toBeInTheDocument();
    });

    test('renders the paragraph tag', () => {
        const { container } = render(<Footer />);
        const paragraph = container.querySelector('p');
        expect(paragraph).toBeInTheDocument();
    });
});