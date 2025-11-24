import { PageText } from "../PageText/PageText";
import { AboutImage } from "../AboutImage/AboutImage";
import { CTAButton } from "../../../../components/shared/CTAButton/CTAButton";
import { Briefcase, FolderGit2, Mail } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const AboutCard = ({ image, text, showCTAs }: { image?: string; text: string; showCTAs?: boolean }) => {
    // Check if text contains "Shep" and replace it with a link and logo
    const renderText = () => {
        if (text.includes("Shep")) {
            const parts = text.split("Shep");
            return (
                <p
                    className="text-slate-700 dark:text-portfolio-white text-lg md:text-xl lg:text-2xl/10 text-left"
                    dangerouslySetInnerHTML={{
                        __html: `${parts[0]}<a href="https://www.shephq.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 transition-colors duration-300 hover:text-portfolio-green">Shep</a><img src="logos/shep.png" alt="Shep logo" class="inline-block w-8 h-8 ml-1 object-contain" />${parts[1]}`
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
        <div className={`w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-16 px-8 ${!image ? 'justify-center' : ''}`}>
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
