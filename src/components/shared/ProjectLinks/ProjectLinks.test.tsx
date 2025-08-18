import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProjectLinks } from "./ProjectLinks";
import { BrowserRouter } from "react-router-dom";

test("renders the ProjectLinks component with provided props", () => {
    render(
        <BrowserRouter>
            <ProjectLinks repoLink="link1" deployedLink="link2" status="completed" />
        </BrowserRouter>
    );
    expect(screen.getAllByRole("link")).toHaveLength(2);
});

test("renders the ProjectLinks component with different text", () => {
    render(
        <BrowserRouter>
            <ProjectLinks repoLink="link3" deployedLink="link4" status="completed" />
        </BrowserRouter>
    );
    expect(screen.getAllByRole("link")).toHaveLength(2);
});

test("renders the ProjectLinks component with correct Tailwind classes", () => {
    render(
        <BrowserRouter>
            <ProjectLinks repoLink="link1" deployedLink="link2" status="completed" />
        </BrowserRouter>
    );
    expect(screen.getByRole("article")).toHaveClass("flex");
    expect(screen.getByRole("article")).toHaveClass("justify-end");
    expect(screen.getByRole("article")).toHaveClass("items-center");
});
