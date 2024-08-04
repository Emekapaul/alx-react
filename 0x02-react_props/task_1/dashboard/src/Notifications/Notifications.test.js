import React from "react";
import { render } from "@testing-library/react";
import Notifications from './Notifications';

describe('Notifications component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Notifications />);
        expect(container).toBeInTheDocument();
    });

    test('renders three list items', () => {
        const { container } = render(<Notifications />);
        const listItems = container.querySelectorAll('li');
        expect(listItems.length).toBe(3);
    });

    test('renders the text "Here is the list of notifications"', () => {
        const { container } = render(<Notifications />);
        const textElement = container.querySelector('p');
        expect(textElement).toHaveTextContent('Here is the list of notifications');
    });
})