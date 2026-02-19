import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MobileProjectCard } from "./MobileProjectCard";
import type { Project } from "@/global";

const mockProject: Project = {
    key: 0,
    name: "Mobile Test Project",
    subTitle: "Mobile Subtitle",
    description: "A mobile test project description",
    image: "logos/test-mobile.svg",
    techStack: ["React", "TypeScript"],
    deployedLink: "https://example-mobile.com",
    repoLink: "https://github.com/test/repo-mobile",
    status: "completed",
    reason: {
        needed: "Mobile Needed",
        solution: "Mobile Solution",
        challenge: "Mobile Challenge",
    },
};

describe("MobileProjectCard", () => {
    it("renders project details correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <MobileProjectCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Mobile Test Project")).toBeInTheDocument();
        expect(screen.getByText("Mobile Subtitle")).toBeInTheDocument();
        expect(screen.getByText("A mobile test project description")).toBeInTheDocument();
        expect(screen.getByText("Mobile Needed")).toBeInTheDocument();
        expect(screen.getByText("Mobile Solution")).toBeInTheDocument();
        expect(screen.getByText("Mobile Challenge")).toBeInTheDocument();
    });

    it("renders project image", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <MobileProjectCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const image = screen.getByAltText("Mobile Test Project");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "logos/test-mobile.svg");
    });

    it("renders repo link", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <MobileProjectCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const repoLink = screen.getByRole("link", { name: /github/i });
        expect(repoLink).toBeInTheDocument();
        expect(repoLink).toHaveAttribute("href", "https://github.com/test/repo-mobile");
    });
});
