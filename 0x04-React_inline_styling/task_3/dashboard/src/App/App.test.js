import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Mock global function
global.alert = jest.fn();

describe('App Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test('renders the Notifications component', () => {
    render(<App />);
    const notificationEle = screen.getByText('Your notifications');
    expect(notificationEle).toBeInTheDocument();
  })

  test('renders the Header component', () => {
    render(<App />);
    const headerEle = screen.getByText('School dashboard');
    expect(headerEle).toBeInTheDocument();
  });

  test('renders the Login component', () => {
    const { container } = render(<App isLoggedIn={false} />);
    const bodyDiv = screen.getByText('Login to access the full dashboard');
    expect(bodyDiv).toBeInTheDocument();
  });

  test('renders the Footer component', () => {
    render(<App />);
    const footerEle = screen.getByText('Holberton School 2024');
    expect(footerEle).toBeInTheDocument();
  });

  test('CourseList component is not displayed/rendered when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    const courseList = screen.queryByText('Course list');
    expect(courseList).not.toBeInTheDocument();
  });
});

describe('App Component when isLoggedIn is true', () => {
  test('Login component is not displayed/rendered when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    const login = screen.queryByText('Log in to continue');
    expect(login).not.toBeInTheDocument();
  });

  test('CourseList component is displayed/rendered when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    const courseList = screen.getByText('Course list');
    expect(courseList).toBeInTheDocument();
  });
});

describe('App Component(when `ctrl+h` is pressed)', () => {
  test('calls `logOut` and alerts "logging you out" when `ctrl+h` is pressed', () => {
    const logOutMock = jest.fn();
    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(window, { key: 'h', code: 'keyH', ctrlKey: true });
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});