import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom Compnent', () => {
  test('render a BodySectionWithMarginBottom component and passes props correctly to the child component', () => {
    render(
      <BodySectionWithMarginBottom title={'test title'}>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySectionTitle = screen.getByText('test title');
    expect(bodySectionTitle).toBeInTheDocument();

    const bodySectionChildren = screen.getByText('test children node');
    expect(bodySectionChildren).toBeInTheDocument();
  });
});