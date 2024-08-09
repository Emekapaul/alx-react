import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

// Mock global function
global.alert = jest.fn();

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
    const { container } = render(<App isLoggedIn={false} />);
    const bodyDiv = container.querySelector('.App-body');
    expect(bodyDiv).toBeInTheDocument();
  });

  test('renders the Footer component', () => {
    const { container } = render(<App />);
    const footerDiv = container.querySelector('.App-footer');
    expect(footerDiv).toBeInTheDocument();
  });

  test('CourseList component is not displayed/rendered when isLoggedIn is false', () => {
    const { container } = render(<App isLoggedIn={false} />);
    const courseList = container.querySelector('table#CourseList');
    expect(courseList).not.toBeInTheDocument();
  });
});

describe('App Component when isLoggedIn is true', () => {
  test('Login component is not displayed/rendered when isLoggedIn is true', () => {
    const { container } = render(<App isLoggedIn={true} />);
    const login = container.querySelector('div.App-body');
    expect(login).not.toBeInTheDocument();
  });

  test('CourseList component is displayed/rendered when isLoggedIn is true', () => {
    const { container } = render(<App isLoggedIn={true} />);
    const courseList = container.querySelector('table#CourseList');
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