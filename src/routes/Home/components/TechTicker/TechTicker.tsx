import type { Technology } from "../../../../global";
import { useTheme } from "../../../../contexts/ThemeContext";

export const TechTicker = ({
    technologies,
    isVisible = true
}: {
    technologies: Technology[];
    isVisible?: boolean;
}) => {
    const { theme } = useTheme();

    const handleTickerClick = () => {
        document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTechClick = (e: React.MouseEvent, link: string) => {
        e.stopPropagation();
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    const getImageSrc = (image: string | { lightImage: string; darkImage: string }) => {
        return typeof image === "string"
            ? image
            : theme === "dark"
                ? image.darkImage
                : image.lightImage;
    };

    // Duplicate the technologies array multiple times to create seamless loop
    const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies];

    if (!isVisible) return null;

    return (
        <div
            onClick={handleTickerClick}
            className="bg-portfolio-black/80 backdrop-blur-sm border-y border-portfolio-white/20 cursor-pointer hover:bg-portfolio-black/90 transition-colors overflow-hidden"
        >
            <div className="flex animate-ticker whitespace-nowrap py-3">
                {duplicatedTechs.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        onClick={(e) => handleTechClick(e, tech.link)}
                        className="inline-flex items-center gap-2 mx-4 cursor-pointer group transition-all"
                    >
                        <img
                            src={getImageSrc(tech.image)}
                            alt={tech.name}
                            className="w-6 h-6 object-contain transition-transform group-hover:scale-125"
                        />
                        <span className="text-slate-700 dark:text-portfolio-white font-lunasima transition-colors group-hover:text-portfolio-green">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
