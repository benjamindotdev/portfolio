import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkButton } from "./LinkButton";
import { BrowserRouter } from "react-router-dom";

test("renders the LinkButton component with provided props", () => {
    render(
        <BrowserRouter>
            <LinkButton link="/test" />
        </BrowserRouter>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
});

test("renders the LinkButton component with the correct Tailwind classes", () => {
    render(
        <BrowserRouter>
            <LinkButton link="/test" />
        </BrowserRouter>
    );
    expect(screen.getByRole("link")).toHaveClass("no-underline");
    expect(screen.getByRole("link")).toHaveClass("text-left");
    expect(screen.getByRole("link")).toHaveClass("transition-all");
});

test("renders the LinkButton disabled", () => {
    render(
        <BrowserRouter>
            <LinkButton link="/test" disabled />
        </BrowserRouter>
    );
    expect(screen.getByRole("button")).toBeDisabled();
});
