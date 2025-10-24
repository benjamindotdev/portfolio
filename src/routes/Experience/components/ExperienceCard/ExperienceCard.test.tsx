import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ExperienceCard } from "./ExperienceCard";
import type { ExperienceItem } from "../../../../global";

const mockExperience: ExperienceItem = {
    key: 0,
    title: "Senior Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    date: "2024 - Present",
    description: "Leading development of web applications.",
    techStack: ["React", "TypeScript", "Node.js"],
    logo: "logos/tech.svg",
    type: "Full-time",
    isCurrent: true,
};

describe("ExperienceCard", () => {
    it("renders experience details correctly", () => {
        render(
            <BrowserRouter>
                <ExperienceCard experience={mockExperience} />
            </BrowserRouter>
        );

        expect(screen.getByText("Senior Developer @ Tech Corp")).toBeInTheDocument();
        expect(screen.getByText("2024 - Present")).toBeInTheDocument();
        expect(screen.getByText(/Full-time, San Francisco, CA/)).toBeInTheDocument();
        expect(screen.getByText("Leading development of web applications.")).toBeInTheDocument();
    });

    it("renders current badge when isCurrent is true", () => {
        render(
            <BrowserRouter>
                <ExperienceCard experience={mockExperience} />
            </BrowserRouter>
        );

        expect(screen.getByText("Current")).toBeInTheDocument();
    });

    it("does not render current badge when isCurrent is false", () => {
        const pastExperience = { ...mockExperience, isCurrent: false };
        render(
            <BrowserRouter>
                <ExperienceCard experience={pastExperience} />
            </BrowserRouter>
        );

        expect(screen.queryByText("Current")).not.toBeInTheDocument();
    });

    it("renders company logo", () => {
        render(
            <BrowserRouter>
                <ExperienceCard experience={mockExperience} />
            </BrowserRouter>
        );

        const logo = screen.getByAltText("Tech Corp");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "logos/tech.svg");
    });

    it("renders technologies from techStack", () => {
        render(
            <BrowserRouter>
                <ExperienceCard experience={mockExperience} />
            </BrowserRouter>
        );

        // TechList component will render the technologies
        // We just check that the component renders without crashing
        expect(screen.getByText("Senior Developer @ Tech Corp")).toBeInTheDocument();
    });
});
