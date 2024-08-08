import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe('CourseListRow Component', () => {
  test('renders one cell with colspan="2" when textSecondCell does not exist and isHeader is true', () => {
    const { container } = render(
      <table>
        <thead>
          <CourseListRow textFirstCell="First cell text" isHeader={true} />
        </thead>
      </table>
    );
    const colSpanEle = container.querySelector('th[colspan="2"]');
    expect(colSpanEle).toHaveAttribute('colspan', '2');
    expect(colSpanEle).toHaveTextContent('First cell text')
  });

  test('renders two cells when textSecondCell is present and isHeader is True', () => {
    const { container } = render(
      <table>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="First cell text" textSecondCell='second cell text' />
        </thead>
      </table>
    );
    const thElements = container.querySelectorAll('tr th');
    expect(thElements.length).toBe(2);
    expect(thElements[0]).toHaveTextContent('First cell text');
    expect(thElements[1]).toHaveTextContent('second cell text')
  })

  test('renders correctly two td elements within a tr element when isHeader is false', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="First cell text" textSecondCell='second cell text' isHeader={false} />
        </tbody>
      </table>
    );
    const tdElements = container.querySelectorAll('tr td');
    expect(tdElements.length).toBe(2);
    expect(tdElements[0]).toHaveTextContent('First cell text');
    expect(tdElements[1]).toHaveTextContent('second cell text')

  });
})