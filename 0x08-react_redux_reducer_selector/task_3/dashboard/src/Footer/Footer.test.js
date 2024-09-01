import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

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

    test('does not display the contact link when the user is logged out', () => {
        const contextValue = {
            user: { isLoggedIn: false },
        };

        render(
            <AppContext.Provider value={contextValue}>
                <Footer />
            </AppContext.Provider>
        );

        const contactLink = screen.queryByText(/Contact us/i);
        expect(contactLink).not.toBeInTheDocument();
    });

    test('displays the contact link when the user is logged in', () => {
        const contextValue = {
            user: { isLoggedIn: true, email: 'test@example.com' },
        };

        render(
            <AppContext.Provider value={contextValue}>
                <Footer />
            </AppContext.Provider>
        );

        const contactLink = screen.getByText(/Contact us/i);
        expect(contactLink).toBeInTheDocument();
        expect(contactLink.closest('a')).toHaveAttribute('href');
    });

});