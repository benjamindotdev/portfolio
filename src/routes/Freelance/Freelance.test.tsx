import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Freelance } from "./Freelance";
import type { Project } from "../../global";
import { BrowserRouter } from "react-router-dom";

describe("Freelance Component", () => {
    const mockProjects: Project[] = [
        {
            key: 0,
            name: "Test Freelance Project",
            image: "test.png",
            description: "Test freelance description",
            status: "completed",
            type: "freelance",
            techStack: ["React", "TypeScript"],
            deployedLink: "https://test.com",
            repoLink: "https://github.com/test/test",
        },
    ];

    it("renders the Freelance component with provided props", () => {
        render(
            <BrowserRouter>
                <Freelance projects={mockProjects} />
            </BrowserRouter>
        );
        expect(screen.getByText("Test Freelance Project")).toBeInTheDocument();
    });
});
