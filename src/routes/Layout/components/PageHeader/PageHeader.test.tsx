import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageHeader } from "./PageHeader";

test("renders the PageHeader component with provided props", () => {
  render(<PageHeader>testing</PageHeader>);
  expect(screen.getByText("testing")).toBeInTheDocument();
});

test("renders the PageHeader component with different text", () => {
  render(<PageHeader>another test</PageHeader>);
  expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the PageHeader component with HTML elements", () => {
  render(
    <PageHeader>
      <span>nested element</span>
    </PageHeader>
  );
  expect(screen.getByText("nested element")).toBeInTheDocument();
});
