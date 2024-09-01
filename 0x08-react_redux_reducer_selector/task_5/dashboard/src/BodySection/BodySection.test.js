import React from "react";
import { render, screen } from "@testing-library/react";
import BodySection from "./BodySection";

describe('BodySection Component', () => {
  test('renders the component, h2 element and its children without crashing', () => {
    render(
      <BodySection title={'test title'}>
        <p>test children node</p>
      </BodySection>
    );
  });

  test('renders h2 element with text `test title`', () => {
    render(
      <BodySection title={'test title'}>
        <p>test children node</p>
      </BodySection>
    );

    const h2Element = screen.getByText('test title');
    expect(h2Element).toBeInTheDocument();
  })

  test('renders p element with text `test children node`', () => {
    render(
      <BodySection title={'test title'}>
        <p>test children node</p>
      </BodySection>
    );

    const pElement = screen.getByText('test children node');
    expect(pElement).toBeInTheDocument();
  })
});