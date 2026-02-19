import { render, screen } from "@testing-library/react";
import { MobileFreelanceCard } from "./MobileFreelanceCard";
import { useTheme } from "@/contexts/ThemeContext";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";
import { Project } from "@/global";

// Mock the hooks
jest.mock("@/contexts/ThemeContext");
jest.mock("@/hooks/useStackscanTechs");

// Mock child components to simplify testing
jest.mock("@/components/shared/TechList/TechList", () => ({
  TechList: ({ techs }: { techs: string[] }) => <div data-testid="tech-list">{techs.join(", ")}</div>,
}));

jest.mock("@/components/shared/SkillBadge/SkillBadge", () => ({
  SkillBadge: ({ skill }: { skill: string }) => <div data-testid="skill-badge">{skill}</div>,
}));

jest.mock("@/components/shared/LogoImage/LogoImage", () => ({
  LogoImage: ({ name }: { name: string }) => <div data-testid="logo-image">{name}</div>,
}));

jest.mock("@/components/shared/SubHeading/SubHeading", () => ({
  SubHeading: ({ text }: { text: string }) => <h1>{text}</h1>,
}));

const mockProject: Project = {
  key: 1,
  name: "Test Project",
  subTitle: "Test Subtitle",
  description: "Test Description",
  status: "completed",
  techStack: ["React", "TypeScript"],
  image: {
    lightImage: "light-image.png",
    darkImage: "dark-image.png",
  },
  deployedLink: "https://example.com",
  repoLink: "https://github.com/example/repo",
  packageLink: "https://npmjs.com/package/test",
  tags: ["React", "TypeScript"],
  client: {
    name: "Client Name",
    needed: "Client Needed",
    solution: "Client Solution",
    challenge: "Client Challenge",
    testimonial: "Client Testimonial",
    image: "client-image.png",
    position: "Client Position",
    linkedIn: "https://linkedin.com/in/client",
  },
};

describe("MobileFreelanceCard", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    (useStackscanTechs as jest.Mock).mockReturnValue(["React", "TypeScript"]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders basic project information", () => {
    render(<MobileFreelanceCard project={mockProject} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    
    // Check links
    const repoLink = screen.getByRole("link", { name: /github/i });
    expect(repoLink).toHaveAttribute("href", "https://github.com/example/repo");

    const packageLink = screen.getByRole("link", { name: /npm/i }); // Assuming alt text is 'npm'
    expect(packageLink).toHaveAttribute("href", "https://npmjs.com/package/test");
  });

  it("renders project image correctly in light mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    render(<MobileFreelanceCard project={mockProject} />);
    
    const image = screen.getByAltText("Test Project");
    expect(image).toHaveAttribute("src", "light-image.png");
  });

  it("renders project image correctly in dark mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "dark" });
    render(<MobileFreelanceCard project={mockProject} />);
    
    const image = screen.getByAltText("Test Project");
    expect(image).toHaveAttribute("src", "dark-image.png");
  });

  it("renders client details (needed, solution, challenge)", () => {
    render(<MobileFreelanceCard project={mockProject} />);

    expect(screen.getByText("Client Needed")).toBeInTheDocument();
    expect(screen.getByText("Client Solution")).toBeInTheDocument();
    expect(screen.getByText("Client Challenge")).toBeInTheDocument();
  });

  it("renders client testimonial and profile", () => {
    render(<MobileFreelanceCard project={mockProject} />);

    expect(screen.getByText(/"Client Testimonial"/)).toBeInTheDocument();
    expect(screen.getByText("Client Name")).toBeInTheDocument();
    expect(screen.getByText("Client Position")).toBeInTheDocument();
    
    const clientImage = screen.getByAltText("Client Name");
    expect(clientImage).toHaveAttribute("src", "client-image.png");

    expect(screen.getByTestId("logo-image")).toHaveTextContent("LinkedIn");
  });

  it("renders tech stack and tags", () => {
    render(<MobileFreelanceCard project={mockProject} />);

    expect(screen.getByTestId("tech-list")).toHaveTextContent("React, TypeScript");
    
    const skillBadges = screen.getAllByTestId("skill-badge");
    expect(skillBadges).toHaveLength(2);
    expect(skillBadges[0]).toHaveTextContent("React");
    expect(skillBadges[1]).toHaveTextContent("TypeScript");
  });

  it("handles string image source", () => {
    const stringImageProject = {
      ...mockProject,
      image: "image-string.png",
    };
    render(<MobileFreelanceCard project={stringImageProject} />);
    
    const image = screen.getByAltText("Test Project");
    expect(image).toHaveAttribute("src", "image-string.png");
  });

  it("renders without optional client details", () => {
    const minimalProject = {
      ...mockProject,
      client: undefined,
    };
    render(<MobileFreelanceCard project={minimalProject} />);

    expect(screen.queryByText("Client Needed")).not.toBeInTheDocument();
    expect(screen.queryByText("Client Testimonial")).not.toBeInTheDocument();
  });
});
