import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";

describe('CourseList Component', () => {
    test('renders CourseList component without crashing', () => {
        render(<CourseList />);
    });

    test('Check that it renders the 5 different rows', () => {
        const { container } = render(<CourseList />);
        const rows = container.querySelectorAll('table tr');
        expect(rows.length).toBe(5);
    });
})