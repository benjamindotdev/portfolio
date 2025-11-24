import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LanguageFlag } from "./LanguageFlag";

describe("LanguageFlag", () => {
    it("renders flag image with correct attributes", () => {
        render(<LanguageFlag countryCode="US" proficiency="C2" />);
        
        const img = screen.getByAltText("US flag");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "https://flagcdn.com/w80/us.png");
    });

    it("displays proficiency level", () => {
        render(<LanguageFlag countryCode="ES" proficiency="B1" />);
        
        expect(screen.getByText("B1")).toBeInTheDocument();
    });

    it("converts country code to lowercase in URL", () => {
        render(<LanguageFlag countryCode="FR" proficiency="A2" />);
        
        const img = screen.getByAltText("FR flag");
        expect(img).toHaveAttribute("src", "https://flagcdn.com/w80/fr.png");
    });

    it("applies correct styling classes", () => {
        render(<LanguageFlag countryCode="DE" proficiency="C1" />);
        
        const img = screen.getByAltText("DE flag");
        expect(img).toHaveClass("w-8", "h-8", "object-cover", "rounded-lg");
    });
});
