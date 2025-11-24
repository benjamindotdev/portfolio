import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutCard } from "./AboutCard";
import type { AboutItem } from "../../../../global";

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
