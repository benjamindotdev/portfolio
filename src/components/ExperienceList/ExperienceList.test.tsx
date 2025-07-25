import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ExperienceList } from "./ExperienceList";
import { ExperienceItem } from "../../global";

const mockExperience: ExperienceItem[] = [
    {
        key: 0,
        title: "Senior Developer",
        company: "Tech Company",
        location: "San Francisco",
        date: "2024 - Present",
        description: "Leading development of web applications.",
        techStack: ["React", "TypeScript"],
        logo: "logos/tech.svg",
        type: "Full-time",
        isCurrent: true,
    },
    {
        key: 1,
        title: "Junior Developer",
        company: "Startup Inc",
        location: "New York",
        date: "2022 - 2024",
        description: "Developed mobile applications.",
        techStack: ["React Native", "JavaScript"],
        logo: "logos/startup.svg",
        type: "Full-time",
        isCurrent: false,
    },
];

test("renders experience list with multiple items", () => {
    render(
        <BrowserRouter>
            <ExperienceList experience={mockExperience} />
        </BrowserRouter>
    );

    expect(screen.getByText("Senior Developer @ Tech Company")).toBeInTheDocument();
    expect(screen.getByText("Junior Developer @ Startup Inc")).toBeInTheDocument();
});

test("renders empty experience list", () => {
    render(
        <BrowserRouter>
            <ExperienceList experience={[]} />
        </BrowserRouter>
    );

    expect(screen.queryByText("Senior Developer @ Tech Company")).not.toBeInTheDocument();
});
