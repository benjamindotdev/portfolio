import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../../contexts/ThemeContext";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../../../../global";

const mockProject: Project = {
    key: 0,
    name: "Test Project",
    description: "A test project description",
    image: "logos/test.svg",
    techStack: ["React", "TypeScript"],
    deployedLink: "https://example.com",
    repoLink: "https://github.com/test/repo",
    status: "completed",
};

describe("ProjectCard", () => {
    it("renders project details correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Test Project")).toBeInTheDocument();
        expect(screen.getByText("A test project description")).toBeInTheDocument();
    });

    it("renders project image", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const image = screen.getByAltText("Test Project");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "logos/test.svg");
    });

    it("renders link button when deployedLink is provided", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectCard project={mockProject} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const link = screen.getByRole("link", { name: "Link" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("renders repoLink when deployedLink is not provided", () => {
        const projectWithOnlyRepo = { ...mockProject, deployedLink: "" };
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectCard project={projectWithOnlyRepo} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const link = screen.getByRole("link", { name: "Link" });
        expect(link).toHaveAttribute("href", "https://github.com/test/repo");
    });

    it("does not render link button when no links provided", () => {
        const projectWithoutLinks = { ...mockProject, deployedLink: "", repoLink: "" };
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectCard project={projectWithoutLinks} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const linkButton = screen.queryByRole("button", { name: "Link" });
        expect(linkButton).not.toBeInTheDocument();
    });

    it("renders with empty techStack", () => {
        const projectWithoutTech = { ...mockProject, techStack: [] };
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectCard project={projectWithoutTech} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Test Project")).toBeInTheDocument();
    });
});
