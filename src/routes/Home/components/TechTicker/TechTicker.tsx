import type { Technology } from "../../../../global";

export const TechTicker = ({
    technologies,
    isVisible = true
}: {
    technologies: Technology[];
    isVisible?: boolean;
}) => {
    const handleTickerClick = () => {
        document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleTechClick = (e: React.MouseEvent, link: string) => {
        e.stopPropagation();
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
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
                            src={tech.image}
                            alt={tech.name}
                            className="w-6 h-6 object-contain transition-transform group-hover:scale-125"
                        />
                        <span className="text-portfolio-white font-lunasima transition-colors group-hover:text-portfolio-green">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
