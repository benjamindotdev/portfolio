import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CircleImage } from "./CircleImage";

test("renders the CircleImage component with provided props", () => {
    render(<CircleImage image="test-image" text="test-image-text" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the CircleImage component with different text", () => {
    render(<CircleImage image="test-image" text="another test" />);
    expect(screen.getByAltText("another test")).toBeInTheDocument();
});

test("renders the CircleImage component with the correct Tailwind classes", () => {
    render(<CircleImage image="test-image" text="test-image-text" />);
    expect(screen.getByRole("img")).toHaveClass("object-contain");
});
