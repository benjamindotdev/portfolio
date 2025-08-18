import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageContent } from "./PageContent";

test("renders the PageContent component with provided props", () => {
    render(<PageContent>testing</PageContent>);
    expect(screen.getByText("testing")).toBeInTheDocument();
});

test("renders the PageContent component with different text", () => {
    render(<PageContent>another test</PageContent>);
    expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the PageContent component with HTML elements", () => {
    render(
        <PageContent>
            <span>nested element</span>
        </PageContent>
    );
    expect(screen.getByText("nested element")).toBeInTheDocument();
});

test("renders the PageContent component with the correct Tailwind classes", () => {
    render(<PageContent>testing</PageContent>);
    expect(screen.getByText("testing")).toHaveClass("h-full");
    expect(screen.getByText("testing")).toHaveClass("w-full");
    expect(screen.getByText("testing")).toHaveClass("flex");
});
