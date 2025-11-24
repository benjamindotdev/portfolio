import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

test("renders the HeroImage component with provided props", () => {
    render(<HeroImage image="test-image" text="test-image-text" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the HeroImage component with different text", () => {
    render(<HeroImage image="test-image" text="another test" />);
    expect(screen.getByAltText("another test")).toBeInTheDocument();
});

test("renders the HeroImage component with the correct Tailwind classes", () => {
    render(<HeroImage image="test-image" text="test-image-text" />);
    expect(screen.getByRole("img")).toHaveClass("object-contain");
});
