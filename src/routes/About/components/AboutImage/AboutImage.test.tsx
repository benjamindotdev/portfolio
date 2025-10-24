import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutImage } from "./AboutImage";

describe("AboutImage", () => {
    it("renders image with correct src and alt", () => {
        render(<AboutImage src="/test-image.jpg" alt="Test Image" />);

        const image = screen.getByAltText("Test Image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "/test-image.jpg");
    });

    it("applies correct CSS classes to image", () => {
        render(<AboutImage src="/test-image.jpg" alt="Test Image" />);

        const image = screen.getByAltText("Test Image");
        expect(image).toHaveClass("w-full", "h-full", "object-cover");
    });
});
