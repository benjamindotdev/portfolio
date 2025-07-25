import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Experience } from "./Experience";
import { ExperienceItem } from "../../global";

const mockExperience: ExperienceItem[] = [
    {
        key: 0,
        title: "Web Developer",
        company: "Tech Solutions",
        location: "Berlin, Germany",
        date: "September 2024 - Present",
        description: "Developing web applications using modern technologies.",
        techStack: ["React", "TypeScript", "Node.js"],
        logo: "logos/tech.svg",
        type: "Full-time",
        isCurrent: true,
    },
];

test("renders experience page with correct title and content", () => {
    render(
        <MemoryRouter>
            <Experience experience={mockExperience} />
        </MemoryRouter>
    );

    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("& Work 💼")).toBeInTheDocument();
    expect(screen.getByText("Web Developer @ Tech Solutions")).toBeInTheDocument();
});
