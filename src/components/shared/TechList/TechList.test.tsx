import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TechList } from "./TechList";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Tech } from "@/global";

const mockTechs: Tech[] = [
    {
        key: 1,
        name: "tech1",
        image: "image1",
        link: "link1",
    },
    {
        key: 2,
        name: "tech2",
        image: "image2",
        link: "link2",
    },
];

test("renders the TechList component with provided props", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechList techs={mockTechs} />
            </ThemeProvider>
        </BrowserRouter>
    );
    expect(screen.getByText("tech1")).toBeInTheDocument();
    expect(screen.getByText("tech2")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
});

test("renders the TechList component with different text", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechList
                    techs={[
                        {
                            key: 1,
                            name: "tech3",
                            image: "image3",
                            link: "link3",
                        },
                    ]}
                />
            </ThemeProvider>
        </BrowserRouter>
    );
    expect(screen.getByText("tech3")).toBeInTheDocument();
});

test("renders the TechList component with correct Tailwind classes", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechList techs={mockTechs} />
            </ThemeProvider>
        </BrowserRouter>
    );
    const container = screen.getByRole("list").parentElement;
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-col");
    expect(screen.getByRole("list")).toHaveClass("flex");
    expect(screen.getByRole("list")).toHaveClass("flex-wrap");
});

test("renders the Techlist component with subHeading", () => {
    render(
        <BrowserRouter>
            <ThemeProvider>
                <TechList techs={mockTechs} subHeading="subHeading" />
            </ThemeProvider>
        </BrowserRouter>
    );
    expect(screen.getByText("subHeading")).toBeInTheDocument();
});
