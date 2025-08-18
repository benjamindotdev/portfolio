import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GitButton } from "./GitButton";
import { BrowserRouter } from "react-router-dom";

test("renders the GitButton component with provided props", () => {
  render(
    <BrowserRouter>
      <GitButton repoLink="" disabled={false} />
    </BrowserRouter>
  );
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("renders the Gitbutton disabled", () => {
  render(
    <BrowserRouter>
      <GitButton repoLink="" disabled={true} />
    </BrowserRouter>
  );
  expect(screen.getByRole("button")).toBeDisabled();
});
