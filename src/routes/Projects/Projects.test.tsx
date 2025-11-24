import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Projects } from "./Projects";
import { Project } from "@/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";

test("loads and displays project items", async () => {
    const mockProjects: Project[] = [
        {
            key: 1,
            name: "Project 1",
            description: "Description 1",
            techStack: ["React", "TypeScript"],
            image: "",
            status: "completed",
            deployedLink: "https://example.com",
        },
        {
            key: 2,
            name: "Project 2",
            description: "Description 2",
            techStack: ["React", "TypeScript"],
            image: "",
            status: "completed",
            deployedLink: "https://example.com",
        },
    ];

    render(
        <BrowserRouter>
            <ThemeProvider>
                <Projects projects={mockProjects} />
            </ThemeProvider>
        </BrowserRouter>
    );

    const desc1 = await screen.findByText("Description 1");
    const desc2 = await screen.findByText("Description 2");

    expect(desc1).toBeInTheDocument();
    expect(desc2).toBeInTheDocument();
});
