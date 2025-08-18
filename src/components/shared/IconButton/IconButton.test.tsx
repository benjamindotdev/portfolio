import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IconButton } from "./IconButton";

test("renders the IconButton component with provided props", () => {
    render(
        <IconButton text="test">
            <span>testing</span>
        </IconButton>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
});

test("renders the IconButton component with different text", () => {
    render(
        <IconButton text="another test">
            <span>testing</span>
        </IconButton>
    );
    expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the IconButton component with HTML elements", () => {
    render(
        <IconButton text="test">
            <span>nested element</span>
        </IconButton>
    );
    expect(screen.getByText("nested element")).toBeInTheDocument();
});

test("renders the Iconbutton component disabled", () => {
    render(
        <IconButton text="test" disabled>
            <span>testing</span>
        </IconButton>
    );
    expect(screen.getByRole("button")).toBeDisabled();
});

test("renders the IconButton component with the correct Tailwind classes", () => {
    render(
        <IconButton text="test">
            <span>testing</span>
        </IconButton>
    );
    expect(screen.getByRole("button")).toHaveClass("bg-transparent");
    expect(screen.getByRole("button")).toHaveClass("cursor-pointer");
});

test("renders the IconButton component with disabled classes when disabled", () => {
    render(
        <IconButton text="test" disabled>
            <span>testing</span>
        </IconButton>
    );
    expect(screen.getByRole("button")).toHaveClass("opacity-50");
    expect(screen.getByRole("button")).toHaveClass("cursor-not-allowed");
});
