import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutList } from "./AboutList";
import type { AboutItem } from "@/global";

const mockAboutItems: AboutItem[] = [
    {
        key: 1,
        image: "image1",
        text: "text1",
    },
    {
        key: 2,
        image: "image2",
        text: "text2",
    },
];

test("renders the AboutList component with provided props", () => {
    render(<AboutList aboutItems={mockAboutItems} />);
    expect(screen.getByText("text1")).toBeInTheDocument();
    expect(screen.getByText("text2")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
});

test("renders the AboutList component with different text", () => {
    render(
        <AboutList
            aboutItems={[
                {
                    key: 1,
                    image: "image1",
                    text: "another text",
                },
            ]}
        />
    );
    expect(screen.getByText("another text")).toBeInTheDocument();
});

test("fails to render the AboutList component with missing props", () => {
    // @ts-ignore
    render(<AboutList />);
    expect(screen.queryByText("text1")).toBeNull();
});
