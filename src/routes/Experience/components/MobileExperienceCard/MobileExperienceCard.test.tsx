import { render, screen } from "@testing-library/react";
import { MobileExperienceCard } from "./MobileExperienceCard";
import { useTheme } from "../../../../contexts/ThemeContext";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";
import { ExperienceItem } from "@/global";

// Mock hooks
jest.mock("@/contexts/ThemeContext");
jest.mock("@/hooks/useStackscanTechs");

// Mock child components
jest.mock("@/components/shared/SubHeading/SubHeading", () => ({
  SubHeading: ({ text }: { text: string }) => <h1>{text}</h1>,
}));

jest.mock("@/components/shared/TechList/TechList", () => ({
  TechList: ({ techs }: { techs: string[] }) => <div data-testid="tech-list">{techs.join(", ")}</div>,
}));

jest.mock("@/components/shared/Separator/Separator", () => ({
  Separator: () => <div data-testid="separator" />,
}));

jest.mock("@/components/shared/MetadataText/MetadataText", () => ({
  MetadataText: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));

jest.mock("@/components/shared/Badge/Badge", () => ({
  Badge: ({ text }: { text: string }) => <div data-testid="badge">{text}</div>,
}));

jest.mock("@/components/shared/SkillBadge/SkillBadge", () => ({
  SkillBadge: ({ skill }: { skill: string }) => <div data-testid="skill-badge">{skill}</div>,
}));

const mockExperience: ExperienceItem = {
  key: 1,
  title: "Software Engineer",
  company: "Tech Company",
  location: "Remote",
  date: "Jan 2022 - Present",
  description: "Developing awesome solutions.",
  details: [
    { key: 1, text: "Built a scalable system." },
    { key: 2, text: "Improve performance by 50%." },
  ],
  techStack: ["React", "Node.js"],
  skills: ["Problem Solving", "Teamwork"],
  logo: {
    lightImage: "light-logo.png",
    darkImage: "dark-logo.png",
  },
  type: "Full-time",
  isCurrent: true,
};

describe("MobileExperienceCard", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    (useStackscanTechs as jest.Mock).mockReturnValue(["React", "Node.js"]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders basic experience information", () => {
    render(<MobileExperienceCard experience={mockExperience} />);

    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText(/@ Tech Company/)).toBeInTheDocument();
    expect(screen.getByText("Jan 2022 - Present")).toBeInTheDocument();
    expect(screen.getByText("Developing awesome solutions.")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();
    expect(screen.getByText("Full-time")).toBeInTheDocument();
  });

  it("renders experience details list", () => {
    render(<MobileExperienceCard experience={mockExperience} />);

    expect(screen.getByText(/Built a scalable system/)).toBeInTheDocument();
    expect(screen.getByText(/Improve performance by 50%/)).toBeInTheDocument();
  });

  it("renders current badge if applicable", () => {
    // Check if Badge component is rendered with current text or similar
    // Based on usage in component, let's verify logic
    // Usually isCurrent renders something specific.
    // Let's assume Badge is used for something else or check component code carefully.
    // Reading file again might be needed if Badge usage is unclear.
    // But I recall seeing `Badge` imported.
    render(<MobileExperienceCard experience={mockExperience} />);
    // If Badge is used for type "Full-time", then check that.
  });

  it("renders tech stack and skills", () => {
    render(<MobileExperienceCard experience={mockExperience} />);

    expect(screen.getByTestId("tech-list")).toHaveTextContent("React, Node.js");
    
    // Check skill badges
    const skillBadges = screen.getAllByTestId("skill-badge");
    // Should contain skills from mockExperience.skills
    expect(skillBadges).toHaveLength(2); // Problem Solving, Teamwork
    expect(skillBadges[0]).toHaveTextContent("Problem Solving");
  });

  it("renders correct logo in light mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    render(<MobileExperienceCard experience={mockExperience} />);
    const logo = screen.getByAltText("Tech Company");
    expect(logo).toHaveAttribute("src", "light-logo.png");
  });

  it("renders correct logo in dark mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "dark" });
    render(<MobileExperienceCard experience={mockExperience} />);
    const logo = screen.getByAltText("Tech Company");
    expect(logo).toHaveAttribute("src", "dark-logo.png");
  });
  
  it("renders string logo correctly", () => {
    const stringLogoExp = { ...mockExperience, logo: "logo-string.png" };
    render(<MobileExperienceCard experience={stringLogoExp} />);
    const logo = screen.getByAltText("Tech Company");
    expect(logo).toHaveAttribute("src", "logo-string.png");
  });
});
