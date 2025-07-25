import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceItem } from "../../global";

const mockExperience: ExperienceItem = {
    key: 0,
    title: "Test Developer",
    company: "Test Company",
    location: "Test City",
    date: "2024 - Present",
    description: "Test description of the role and responsibilities.",
    techStack: ["React", "TypeScript", "Node.js"],
    link: "https://test.com",
    logo: "logos/test.svg",
    type: "Full-time",
    isCurrent: true,
};

test("renders experience card with correct information", () => {
    render(
        <BrowserRouter>
            <ExperienceCard experience={mockExperience} />
        </BrowserRouter>
    );

    expect(screen.getByText("Test Developer @ Test Company")).toBeInTheDocument();
    expect(screen.getByText("Full-time, Test City")).toBeInTheDocument();
    expect(screen.getByText("2024 - Present")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
    expect(screen.getByText("Test description of the role and responsibilities.")).toBeInTheDocument();
}); test("renders experience card without current badge when not current", () => {
    const pastExperience = { ...mockExperience, isCurrent: false };
    render(
        <BrowserRouter>
            <ExperienceCard experience={pastExperience} />
        </BrowserRouter>
    );

    expect(screen.queryByText("Current")).not.toBeInTheDocument();
});

test("renders experience card without link button when no link provided", () => {
    const experienceWithoutLink = { ...mockExperience, link: undefined, techStack: [] };
    render(
        <BrowserRouter>
            <ExperienceCard experience={experienceWithoutLink} />
        </BrowserRouter>
    );

    // LinkButton should not be rendered when no link is provided and no tech stack
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
});
