import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageText } from "./PageText";

test("renders the PageHeader component with provided props", () => {
  render(<PageText>testing</PageText>);
  expect(screen.getByText("testing")).toBeInTheDocument();
});

test("renders the PageText component with different text", () => {
  render(<PageText>another test</PageText>);
  expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the PageText component with HTML elements", () => {
  render(
    <PageText>
      <span>nested element</span>
    </PageText>
  );
  expect(screen.getByText("nested element")).toBeInTheDocument();
});
