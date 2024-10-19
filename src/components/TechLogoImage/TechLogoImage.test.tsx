import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TechLogoImage } from "./TechLogoImage";
import { BrowserRouter } from "react-router-dom";

const mockImage = {
  key: 1,
  image: "test",
  name: "test",
  link: "/test",
};

test("renders the TechLogoImage component with provided props", () => {
  render(
    <BrowserRouter>
      <TechLogoImage
        image={mockImage.image}
        name={mockImage.name}
        link={mockImage.link}
      />
    </BrowserRouter>
  );
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the TechLogoImage component with different text", () => {
  render(
    <BrowserRouter>
      <TechLogoImage
        image="another test"
        name="another test"
        link="/another-test"
      />
    </BrowserRouter>
  );
  expect(screen.getByText("another test")).toBeInTheDocument();
});

test("renders the TechLogoImage component with tech-stack-item class", () => {
  render(
    <BrowserRouter>
      <TechLogoImage
        image={mockImage.image}
        name={mockImage.name}
        link={mockImage.link}
      />
    </BrowserRouter>
  );
  expect(screen.getByRole("link")).toHaveClass("tech-stack-item");
  expect(screen.getByRole("img")).toHaveClass("tech-stack-logo");
  expect(screen.getByText("test")).toHaveClass("tech-stack-name");
});
