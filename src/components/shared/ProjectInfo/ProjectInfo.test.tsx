import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProjectInfo } from "./ProjectInfo";

const mockProjectInfo = {
    image: "testImage",
    name: "testName",
};

test("renders the ProjectInfo component with provided props", () => {
    render(
        <ProjectInfo image={mockProjectInfo.image} name={mockProjectInfo.name} />
    );
    expect(screen.getByText("testName")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the ProjectInfo component with different text", () => {
    render(<ProjectInfo image={mockProjectInfo.image} name="another test" />);
    expect(screen.getByText("another test")).toBeInTheDocument();
});

test("fails to render the ProjectInfo component with missing props", () => {
    // @ts-ignore
    render(<ProjectInfo />);
    expect(screen.queryByText("testName")).toBeNull();
});

test("renders the ProjectInfo component with correct Tailwind classes", () => {
    render(
        <ProjectInfo image={mockProjectInfo.image} name={mockProjectInfo.name} />
    );
    expect(screen.getByRole("article")).toHaveClass("w-full");
    expect(screen.getByRole("article")).toHaveClass("flex");
    expect(screen.getByRole("article")).toHaveClass("justify-start");
});
