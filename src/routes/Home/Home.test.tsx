import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { benjamin } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import type { Technology } from "../../global";
import "@testing-library/jest-dom";

const mockTechnologies = benjamin.technologies as Technology[];

describe("Home Component", () => {
  it("renders the Home component with provided props", () => {
    render(
      <BrowserRouter>
        <Home
          technologies={mockTechnologies}
          image="test-image.jpg"
          name="Benjamin"
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText((content) => content.includes("Hey, I'm"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Benjamin"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Full-stack"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Web Dev"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Ironhack"))
    ).toBeInTheDocument();
    expect(screen.getByAltText("Benjamin")).toHaveAttribute(
      "src",
      "test-image.jpg"
    );
  });

  it("renders the correct technology categories", () => {
    render(
      <BrowserRouter>
        <Home technologies={mockTechnologies} />
      </BrowserRouter>
    );

    expect(screen.getByText("Front end")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Back end")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("renders default image when no image is provided", () => {
    render(
      <BrowserRouter>
        <Home technologies={mockTechnologies} name="Benjamin" />
      </BrowserRouter>
    );

    expect(screen.getByAltText("Benjamin")).toHaveAttribute("src", "");
  });
});
