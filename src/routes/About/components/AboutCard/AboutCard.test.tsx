import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutCard } from "./AboutCard";
import type { AboutItem } from "@/global";

const mockAboutItem: AboutItem = {
    key: 1,
    image: "image1",
    text: "text1",
};

test("renders the AboutCard component with provided props", () => {
    render(<AboutCard image={mockAboutItem.image} text={mockAboutItem.text} />);
    expect(screen.getByText("text1")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the AboutCard component with different text", () => {
    render(<AboutCard image={mockAboutItem.image} text="another text" />);
    expect(screen.getByText("another text")).toBeInTheDocument();
});

test("fails to render the AboutCard component with missing props", () => {
    // @ts-ignore
    render(<AboutCard text="" />);
    expect(screen.queryByText("text1")).toBeNull();
});

test("renders without image when image prop is not provided", () => {
    render(<AboutCard text="Text without image" />);
    expect(screen.getByText("Text without image")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

test("renders text with foxy bio wordmark", () => {
    render(<AboutCard text="I'm the CTO at foxy bio, an AI bioinformatics startup" />);
    const img = screen.getByAltText("foxy bio");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "logos/experience/foxywordmark.svg");
});

test("renders CTAs when showCTAs is true", () => {
    render(<AboutCard text="Test text" showCTAs={true} />);
    expect(screen.getByText("My story")).toBeInTheDocument();
    expect(screen.getByText("My work")).toBeInTheDocument();
    expect(screen.getByText("Let's talk")).toBeInTheDocument();
});

test("does not render CTAs when showCTAs is false", () => {
    render(<AboutCard text="Test text" showCTAs={false} />);
    expect(screen.queryByText("My story")).not.toBeInTheDocument();
    expect(screen.queryByText("My work")).not.toBeInTheDocument();
    expect(screen.queryByText("Let's talk")).not.toBeInTheDocument();
});

test("renders plain text without Shep", () => {
    render(<AboutCard text="Just regular text here" />);
    expect(screen.getByText("Just regular text here")).toBeInTheDocument();
});
