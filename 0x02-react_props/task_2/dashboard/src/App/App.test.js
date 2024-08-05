import React from "react";
import { render } from "@testing-library/react";
import App from './App';

describe('App Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container).toBeInTheDocument();
    });

    test('renders the Notifications component', () => {
        const { container } = render(<App />);
        const notificationDiv = container.querySelector('.Notifications');
        expect(notificationDiv).toBeInTheDocument();
    })

    test('renders the Header component', () => {
        const { container } = render(<App />);
        const headerDiv = container.querySelector('.App-header');
        expect(headerDiv).toBeInTheDocument();
    });

    test('renders the Login component', () => {
        const { container } = render(<App />);
        const bodyDiv = container.querySelector('.App-body');
        expect(bodyDiv).toBeInTheDocument();
    });

    test('renders the Footer component', () => {
        const { container } = render(<App />);
        const footerDiv = container.querySelector('.App-footer');
        expect(footerDiv).toBeInTheDocument();
    })
});