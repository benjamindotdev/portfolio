import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OpenSource } from "./OpenSource";
import { Project } from "@/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";

test("loads and displays project items", async () => {
    const mockProjects: Project[] = [
        {
            key: 1,
            name: "Project 1",
            image: "image1.png",
            status: "completed",
            description: "Description 1",
            subTitle: "Subtitle 1",
            deployedLink: "https://example.com",
            repoLink: "https://github.com",
            packageLink: "https://npmjs.com",
            techStack: ["React", "TypeScript"],
            tags: ["Tag1"],
            type: "personal",
        },
        {
            key: 2,
            name: "Project 2",
            image: "image2.png",
            status: "completed",
            description: "Description 2",
            subTitle: "Subtitle 2",
            deployedLink: "https://example.com",
            repoLink: "https://github.com",
            techStack: ["React", "TypeScript"],
            type: "personal",
        },
    ];

    render(
        <BrowserRouter>
            <ThemeProvider>
                <OpenSource projects={mockProjects} />
            </ThemeProvider>
        </BrowserRouter>
    );

    const desc1 = await screen.findAllByText("Description 1");
    const desc2 = await screen.findAllByText("Description 2");

    expect(desc1[0]).toBeInTheDocument();
    expect(desc2[0]).toBeInTheDocument();
});
