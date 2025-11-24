import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { About } from "./About";
import { AboutItem } from "@/global";

test("loads and displays about items", async () => {
  const mockAboutItems: AboutItem[] = [
    { key: 1, image: "", text: "5 years in software development" },
    { key: 2, image: "", text: "Bachelor's in Computer Science" },
  ];

  render(<About aboutItems={mockAboutItems} />);

  const test1 = await screen.findByText("5 years in software development");
  const test2 = await screen.findByText("Bachelor's in Computer Science");

  expect(test1).toBeInTheDocument();
  expect(test2).toBeInTheDocument();
});
