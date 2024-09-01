import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from "../App/AppContext";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
    expect(h1).toHaveTextContent('School dashboard');
  });

  test('logoutSection is not created when user is not logged in', () => {
    // Render Header with the default context value
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    // Verify that logoutSection is not present
    const logoutSection = screen.queryByTestId('logoutSection');
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('logoutSection is created when user is logged in', () => {
    // Render Header with a user who is logged in
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    // Verify that logoutSection is present
    const logoutSection = screen.getByTestId('logoutSection');
    expect(logoutSection).toBeInTheDocument();
    expect(logoutSection).toHaveTextContent('Welcome test@example.com');
  });

  test('clicking logout link calls the logOut function', () => {
    // Create a mock function for logOut
    const logOutMock = jest.fn();

    // Render Header with a user who is logged in and the mock logOut function
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );

    // Find the logout button and click it
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButton);

    // Verify that the logOut function was called
    expect(logOutMock).toHaveBeenCalled();
  });


})