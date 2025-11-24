import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MetadataText } from "./MetadataText";

describe("MetadataText", () => {
    it("renders children text", () => {
        render(<MetadataText>Test metadata</MetadataText>);
        expect(screen.getByText("Test metadata")).toBeInTheDocument();
    });

    it("renders as paragraph element", () => {
        const { container } = render(<MetadataText>Content</MetadataText>);
        const paragraph = container.querySelector("p");
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent("Content");
    });

    it("applies correct styling classes", () => {
        const { container } = render(<MetadataText>Styled text</MetadataText>);
        const paragraph = container.querySelector("p");
        expect(paragraph).toHaveClass("m-0", "text-sm", "text-slate-700", "dark:text-portfolio-white");
    });

    it("renders with React nodes as children", () => {
        render(
            <MetadataText>
                <span>Nested</span> content
            </MetadataText>
        );
        expect(screen.getByText("Nested")).toBeInTheDocument();
        expect(screen.getByText(/content/)).toBeInTheDocument();
    });
});
