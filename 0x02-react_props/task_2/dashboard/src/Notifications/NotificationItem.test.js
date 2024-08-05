import React from "react";
import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe('NotificationItem Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<NotificationItem />);
        expect(container).toBeInTheDocument();
    });

    test('renders the correct html when "type" & "value" props is passed', () => {
        const { container } = render(<NotificationItem type="default" value="Test notification" />);
        const dataAttr = container.querySelector('li[data-notification-type]');
        expect(dataAttr).toBeInTheDocument()
        expect(dataAttr).toHaveAttribute('data-notification-type', 'default');
        screen.getByText('Test notification', { selector: 'li[data-notification-type]' });
    });

    test('renders the correct html when "html" props is passed', () => {
        const { container } = render(<NotificationItem html='<u>test</u>' />);
        const htmlElement = container.querySelector('u');
        expect(htmlElement).toBeInTheDocument();
        screen.getByText('test', { selector: 'u' })
    });
})