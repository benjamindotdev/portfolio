import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../../contexts/ThemeContext";
import { ProjectList } from "./ProjectList";
import type { Project } from "@/global";

const mockProjects: Project[] = [
    {
        key: 0,
        name: "Project One",
        description: "First project description",
        image: "logos/project1.svg",
        techStack: ["React", "TypeScript"],
        deployedLink: "https://project1.com",
        repoLink: "https://github.com/test/project1",
        status: "completed",
    },
    {
        key: 1,
        name: "Project Two",
        description: "Second project description",
        image: "logos/project2.svg",
        techStack: ["Node.js", "Express"],
        deployedLink: "",
        repoLink: "https://github.com/test/project2",
        status: "in progress",
    },
    {
        key: 2,
        name: "Project Three",
        description: "Third project description",
        image: "logos/project3.svg",
        techStack: ["Python", "Django"],
        deployedLink: "https://project3.com",
        repoLink: "",
        status: "completed",
    },
];

describe("ProjectList", () => {
    it("renders all projects", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectList projects={mockProjects} />
                </ThemeProvider>
            </BrowserRouter>
        );

        // ProjectList now only renders desktop cards
        const projectOnes = screen.getAllByText("Project One");
        expect(projectOnes.length).toBe(1);
        expect(projectOnes[0]).toBeInTheDocument();

        const projectTwos = screen.getAllByText("Project Two");
        expect(projectTwos.length).toBe(1);
        expect(projectTwos[0]).toBeInTheDocument();

        const projectThrees = screen.getAllByText("Project Three");
        expect(projectThrees.length).toBe(1);
        expect(projectThrees[0]).toBeInTheDocument();
    });

    it("renders correct number of project cards", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectList projects={mockProjects} />
                </ThemeProvider>
            </BrowserRouter>
        );

        // ProjectList now only renders desktop cards
        // With 3 items in projects, we expect 3 desktop cards
        const projectNames = screen.getAllByText(/Project/);
        // "Project One", "Project Two", "Project Three"
        expect(projectNames).toHaveLength(3);
    });

    it("renders empty list when no projects provided", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectList projects={[]} />
                </ThemeProvider>
            </BrowserRouter>
        );

        expect(screen.queryByText(/Project/)).not.toBeInTheDocument();
    });

    it("renders all project descriptions", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <ProjectList projects={mockProjects} />
                </ThemeProvider>
            </BrowserRouter>
        );

        const desc1 = screen.getAllByText("First project description");
        const desc2 = screen.getAllByText("Second project description");
        const desc3 = screen.getAllByText("Third project description");

        expect(desc1[0]).toBeInTheDocument();
        expect(desc2[0]).toBeInTheDocument();
        expect(desc3[0]).toBeInTheDocument();
    });
});
