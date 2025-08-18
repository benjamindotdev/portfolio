import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageContainer } from "./PageContainer";

test("renders the PageContainer component with provided props", async () => {
    render(
        <PageContainer id="1">
            <span>testing</span>
        </PageContainer>
    );
    expect(await screen.findByText("testing")).toBeInTheDocument();
});

test("renders the PageContainer component with different text", async () => {
    render(
        <PageContainer id="2">
            <span>another test</span>
        </PageContainer>
    );
    expect(await screen.findByText("another test")).toBeInTheDocument();
});

test("renders the PageContainer component with HTML elements", async () => {
    render(
        <PageContainer id="3">
            <span>nested element</span>
        </PageContainer>
    );
    expect(await screen.findByText("nested element")).toBeInTheDocument();
});

test("renders the PageContainer component with the correct Tailwind classes", async () => {
    render(<PageContainer id="4">testing</PageContainer>);
    const element = await screen.findByText("testing");
    expect(element).toHaveClass("min-h-screen");
    expect(element).toHaveClass("w-full");
    expect(element).toHaveClass("flex");
});
