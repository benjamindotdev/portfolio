import { PageText } from "../PageText/PageText";
import { AboutImage } from "../AboutImage/AboutImage";
import { CTAButton } from "@/components/shared/CTAButton/CTAButton";
import { Briefcase, FolderGit2, Mail } from "lucide-react";

export const AboutCard = ({ image, text, showCTAs }: { image?: string; text: string; showCTAs?: boolean }) => {
    // Check if text contains "foxy bio" and replace it with a wordmark image
    const renderText = () => {
        if (text.includes("foxy bio")) {
            const parts = text.split("foxy bio");
            return (
                <p
                    className="text-slate-700 dark:text-portfolio-white text-lg md:text-xl lg:text-2xl/10 text-left"
                    dangerouslySetInnerHTML={{
                        __html: `${parts[0]}<img src="logos/experience/foxywordmark.svg" alt="foxy bio" class="inline-block h-5 md:h-6 w-auto mx-1.5 object-contain align-text-bottom" />${parts[1]}`
                    }}
                />
            );
        }
        return (
            <div
                className="text-slate-700 dark:text-portfolio-white text-lg md:text-xl lg:text-2xl/10 text-left"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    };

    return (
        <div className="w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-8">
            {image && (
                <div className="w-full md:w-2/3">
                    <AboutImage src={image} alt={text} />
                </div>
            )}
            <div className={`w-full ${image ? 'md:w-1/3' : 'max-w-4xl text-center'} flex flex-col gap-8 xl:gap-12`}>
                {renderText()}
                {showCTAs && (
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <CTAButton
                            onClick={() => window.location.href = '/experience'}
                            text="My story"
                            icon={Briefcase}
                        />
                        <CTAButton
                            onClick={() => window.location.href = '/freelance'}
                            text="My work"
                            icon={FolderGit2}
                        />
                        <CTAButton
                            onClick={() => window.location.href = 'mailto:hello@benjamin.dev'}
                            text="Let's talk"
                            icon={Mail}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
