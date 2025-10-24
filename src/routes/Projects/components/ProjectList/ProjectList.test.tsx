import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import type { Project } from "../../../../global";

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
                <ProjectList projects={mockProjects} />
            </BrowserRouter>
        );

        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("Project Two")).toBeInTheDocument();
        expect(screen.getByText("Project Three")).toBeInTheDocument();
    });

    it("renders correct number of project cards", () => {
        render(
            <BrowserRouter>
                <ProjectList projects={mockProjects} />
            </BrowserRouter>
        );

        const projectNames = screen.getAllByText(/Project/);
        expect(projectNames).toHaveLength(3);
    });

    it("renders empty list when no projects provided", () => {
        render(
            <BrowserRouter>
                <ProjectList projects={[]} />
            </BrowserRouter>
        );

        expect(screen.queryByText(/Project/)).not.toBeInTheDocument();
    });

    it("renders all project descriptions", () => {
        render(
            <BrowserRouter>
                <ProjectList projects={mockProjects} />
            </BrowserRouter>
        );

        expect(screen.getByText("First project description")).toBeInTheDocument();
        expect(screen.getByText("Second project description")).toBeInTheDocument();
        expect(screen.getByText("Third project description")).toBeInTheDocument();
    });
});
