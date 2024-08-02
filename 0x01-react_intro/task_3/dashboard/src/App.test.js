import React from "react";
import { render } from "@testing-library/react";
import App from './App';

describe('App Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });

    test('renders a div with the class App-header', () => {
        const { container } = render(<App />);
        const headerDiv = container.querySelector('.App-header');
        expect(headerDiv).toBeInTheDocument();
    });

    test('renders a div with the class App-body', () => {
        const { container } = render(<App />);
        const bodyDiv = container.querySelector('.App-body');
        expect(bodyDiv).toBeInTheDocument();
    });

    test('renders a div with the class App-footer', () => {
        const { container } = render(<App />);
        const footerDiv = container.querySelector('.App-footer');
        expect(footerDiv).toBeInTheDocument();
    })
});