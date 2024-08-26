import React from "react";
import { render } from "@testing-library/react";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
];

describe('CourseList Component', () => {
    test('renders CourseList component without crashing', () => {
        render(<CourseList />);
    });

    test('Check that it renders the 5 different rows', () => {
        const { container } = render(<CourseList listCourses={listCourses} />);
        const rows = container.querySelectorAll('tr');
        expect(rows.length).toBe(5);
    });

    test('renders correctly if an empty array is passed', () => {
        render(<CourseList listCourses={[]} />);
    });

    test('renders correctly if an empty array is passed', () => {
        const { container } = render(<CourseList listCourses={listCourses} />);
        const listElement = container.querySelectorAll('tbody tr');
        const listEleLength = listCourses.length;
        expect(listElement.length).toBe(listEleLength);
    });
})