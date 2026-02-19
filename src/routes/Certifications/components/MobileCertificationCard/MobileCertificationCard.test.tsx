import { render, screen } from "@testing-library/react";
import { MobileCertificationCard } from "./MobileCertificationCard";
import { useTheme } from "../../../../contexts/ThemeContext";
import { Certification } from "@/global";

// Mock hooks
jest.mock("../../../../contexts/ThemeContext");

// Mock child components
jest.mock("@/components/shared/SubHeading/SubHeading", () => ({
  SubHeading: ({ text }: { text: string }) => <h1>{text}</h1>,
}));

jest.mock("@/components/shared/MetadataText/MetadataText", () => ({
  MetadataText: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));

jest.mock("@/components/shared/LinkButton/LinkButton", () => ({
  LinkButton: ({ link }: { link: string }) => <a href={link} data-testid="link-button">Link Button</a>,
}));

jest.mock("@/components/shared/GitButton/GitButton", () => ({
  GitButton: ({ repoLink }: { repoLink: string }) => <a href={repoLink} data-testid="git-button">Git Button</a>,
}));

jest.mock("@/components/shared/Separator/Separator", () => ({
  Separator: () => <div data-testid="separator" />,
}));

const mockCertification: Certification = {
  key: 1,
  name: "Test Certification",
  logo: {
    lightImage: "light-logo.png",
    darkImage: "dark-logo.png",
  },
  company: "Test Company",
  location: "Remote",
  description: "Test Description",
  category: "Professional Certifications",
  level: "Bootcamp",
  date: "Jan 2024",
  link: "https://cert.example.com",
  repoLink: "https://github.com/example/cert",
  deployedLink: "https://example.com/cert",
};

describe("MobileCertificationCard", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders basic certification details", () => {
    render(<MobileCertificationCard certification={mockCertification} />);

    expect(screen.getByText("Test Certification")).toBeInTheDocument();
    expect(screen.getByText(/@ Test Company/)).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Jan 2024")).toBeInTheDocument();
    expect(screen.getByText("Bootcamp")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();
  });

  it("renders correct logo in light mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    render(<MobileCertificationCard certification={mockCertification} />);

    const logo = screen.getByAltText("Test Company");
    expect(logo).toHaveAttribute("src", "light-logo.png");
  });

  it("renders correct logo in dark mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "dark" });
    render(<MobileCertificationCard certification={mockCertification} />);

    const logo = screen.getByAltText("Test Company");
    expect(logo).toHaveAttribute("src", "dark-logo.png");
  });

  it("renders string logo correctly", () => {
    const stringLogoCert = {
      ...mockCertification,
      logo: "logo-string.png",
    };
    render(<MobileCertificationCard certification={stringLogoCert} />);

    const logo = screen.getByAltText("Test Company");
    expect(logo).toHaveAttribute("src", "logo-string.png");
  });

  it("renders link to credential if present", () => {
    // We expect an anchor tag with the href matching mockCertification.link
    const { container } = render(<MobileCertificationCard certification={mockCertification} />);
    const link = container.querySelector(`a[href="${mockCertification.link}"]`);
    expect(link).toBeInTheDocument();
  });
  
  it("renders repo and deployed links when provided", () => {
     render(<MobileCertificationCard certification={mockCertification} />);
     
     expect(screen.getByTestId("git-button")).toHaveAttribute("href", "https://github.com/example/cert");
     expect(screen.getByTestId("link-button")).toHaveAttribute("href", "https://example.com/cert");
  });

  it("does not render repo/deployed links if missing", () => {
    const noLinksCert = {
        ...mockCertification,
        repoLink: undefined,
        deployedLink: undefined
    };
    render(<MobileCertificationCard certification={noLinksCert} />);
    
    expect(screen.queryByTestId("git-button")).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-button")).not.toBeInTheDocument();
  });
});
