import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

// Mock the console.log function


describe('WithLogging HOC', () => {
  beforeEach(() => {
    // Mock console.log before each test
    jest.spyOn(console, 'log').mockImplementation(() => { });
    cleanup();
  });

  // Restore all mocks after each test
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  })

  test('should log on mount and unmount with "Component" when wrapping a pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p>Test</p>);
    const { unmount } = render(<WrappedComponent />);

    // Check that the console.log was called on mount
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    // Unmount the component
    unmount()

    // Check that console.log was called on unmount
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  test("should log on mount and unmount with the name of the wrapped component", () => {
    const WrappedComponent = WithLogging(Login);
    const { unmount } = render(<WrappedComponent />);

    // Check that the console.log was called on mount with the Login component name
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount the component
    unmount();

    // Check that console.log was called on unmount with the Login component name
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  })
})