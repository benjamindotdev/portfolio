import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import type { Link } from "../../../../global";

const mockLinks: Link[] = [
    {
        key: 1,
        title: "link1",
        route: "/link1",
    },
    {
        key: 2,
        title: "link2",
        route: "/link2",
    },
];

test("renders the Header component with provided props", () => {
    render(
        <BrowserRouter>
            <Header links={mockLinks} />
        </BrowserRouter>
    );
    expect(screen.getByText("link1")).toBeInTheDocument();
    expect(screen.getByText("link2")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(3);
});

test("renders the Header component with different text", () => {
    render(
        <BrowserRouter>
            <Header
                links={[
                    {
                        key: 1,
                        title: "link3",
                        route: "/link3",
                    },
                ]}
            />
        </BrowserRouter>
    );
    expect(screen.getByText("link3")).toBeInTheDocument();
});
