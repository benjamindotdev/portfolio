import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PixelBClipDefs } from "./PixelBClipDefs";

describe("PixelBClipDefs", () => {
    it("renders SVG with defs", () => {
        const { container } = render(<PixelBClipDefs />);
        
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("absolute");
    });

    it("contains clipPath element with correct id", () => {
        const { container } = render(<PixelBClipDefs />);
        
        const clipPath = container.querySelector("clipPath");
        expect(clipPath).toBeInTheDocument();
        expect(clipPath).toHaveAttribute("id", "pixelBClip");
        expect(clipPath).toHaveAttribute("clipPathUnits", "objectBoundingBox");
    });

    it("contains two rectangles in clipPath", () => {
        const { container } = render(<PixelBClipDefs />);
        
        const rects = container.querySelectorAll("clipPath rect");
        expect(rects).toHaveLength(2);
    });

    it("has correct dimensions for rectangles", () => {
        const { container } = render(<PixelBClipDefs />);
        
        const rects = container.querySelectorAll("clipPath rect");
        
        // Top square
        expect(rects[0]).toHaveAttribute("x", "0.08");
        expect(rects[0]).toHaveAttribute("y", "0.06");
        expect(rects[0]).toHaveAttribute("width", "0.282");
        expect(rects[0]).toHaveAttribute("height", "0.282");
        
        // Bottom square
        expect(rects[1]).toHaveAttribute("x", "0.08");
        expect(rects[1]).toHaveAttribute("y", "0.40");
        expect(rects[1]).toHaveAttribute("width", "0.565");
        expect(rects[1]).toHaveAttribute("height", "0.565");
    });
});
