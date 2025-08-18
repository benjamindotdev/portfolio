import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ErrorPage } from "./ErrorPage";

test("renders the ErrorPage component with expected text", () => {
  render(<ErrorPage />);
  expect(screen.getByText("Oops!")).toBeInTheDocument();
});
