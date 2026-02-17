import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";
import type { Technology } from "@/global";
import "@testing-library/jest-dom";

const mockTechnologies: Technology[] = [
    {
        key: 1,
        name: "React",
        image: "/react.svg",
        link: "https://react.dev",
        type: "Frontend",
        homepage: true,
    },
    {
        key: 2,
        name: "TypeScript",
        image: "/ts.svg",
        link: "https://typescriptlang.org",
        type: "Frontend",
        homepage: false,
    },
];

describe("Home Component", () => {
    it("renders the Home component with provided props", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home
                        technologies={mockTechnologies}
                        name="Benjamin"
                    />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(
            screen.getByText((content) => content.includes("Hey, I'm"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("Benjamin"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("sole developer at"))
        ).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes("Shep"))
        ).toBeInTheDocument();
        expect(
            screen.getByAltText("Ironhack")
        ).toBeInTheDocument();
    });

    it("renders default image when no image is provided", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home technologies={mockTechnologies} name="Benjamin" />
                </ThemeProvider>
            </BrowserRouter>
        );

        const heroImage = screen.getByAltText("Benjamin");
        expect(heroImage).toHaveAttribute("src", "/images/heroCropped4.webp");
    });

    it("renders CTA buttons", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home technologies={mockTechnologies} name="Test" />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("My stack")).toBeInTheDocument();
        expect(screen.getByText("My story")).toBeInTheDocument();
        expect(screen.getByText("My solutions")).toBeInTheDocument();
    });

    it("renders homepage technologies", () => {
        const homepageTechs: Technology[] = [
            {
                key: 1,
                name: "React",
                image: "/react.svg",
                link: "https://react.dev",
                type: "Frontend",
                homepage: true,
            },
            {
                key: 2,
                name: "TypeScript",
                image: "/ts.svg",
                link: "https://typescriptlang.org",
                type: "Frontend",
                homepage: true,
            },
        ];

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home technologies={homepageTechs} name="Test" />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByAltText("React")).toBeInTheDocument();
        expect(screen.getByAltText("TypeScript")).toBeInTheDocument();
    });

    it("filters out non-homepage technologies", () => {
        const mixedTechs: Technology[] = [
            {
                key: 1,
                name: "React",
                image: "/react.svg",
                link: "https://react.dev",
                type: "Frontend",
                homepage: true,
            },
            {
                key: 2,
                name: "NotShown",
                image: "/not.svg",
                link: "https://not.dev",
                type: "Frontend",
                homepage: false,
            },
        ];

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Home technologies={mixedTechs} name="Test" />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByAltText("React")).toBeInTheDocument();
        expect(screen.queryByAltText("NotShown")).not.toBeInTheDocument();
    });
});

