import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SubHeading } from "./SubHeading";

test("renders the SubHeading component with provided props", () => {
  render(<SubHeading text="testing" />);
  expect(screen.getByText("testing")).toBeInTheDocument();
});

test("renders the SubHeading component with different text", () => {
  render(<SubHeading text="another test" />);
  expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the SubHeading component with icon", () => {
  render(<SubHeading text="testing" icon="test-icon" />);
  expect(screen.getByText("testing test-icon")).toBeInTheDocument();
});
