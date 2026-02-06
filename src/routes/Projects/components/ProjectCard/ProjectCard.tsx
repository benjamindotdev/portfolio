import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { useTheme } from "@/contexts/ThemeContext";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";

export const ProjectCard = ({
    project,
}: {
    project: Project;
}) => {
    const { theme } = useTheme();
    const { name, description, deployedLink, repoLink, packageLink, image } = project;

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    const techsForDisplay = useStackscanTechs(project);
    const link = deployedLink || repoLink || packageLink;

    return (
        <div className="w-full md:w-[48%] min-h-[300px] md:h-[54%] grid [grid-template-rows:minmax(0,40%)_minmax(0,20%)_minmax(0,40%)] gap-2 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-portfolio-green p-4">
            <div className="w-full flex flex-row justify-between items-start overflow-hidden">
                <div className="flex flex-row items-center gap-6">
                    <LazyLoadImage
                        className="h-auto w-12 rounded"
                        src={imageSrc}
                        alt={name}
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SubHeading text={name} />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {packageLink && (
                        <a href={packageLink} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                            <img src="logos/socials/npm.png" alt="npm" className="h-6" />
                        </a>
                    )}
                    {repoLink && (
                        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                            <img src={theme === "dark" ? "logos/socials/githubWhite.png" : "logos/socials/githubBlack.png"} alt="GitHub" className="w-6 h-6" />
                        </a>
                    )}
                    {link && <LinkButton link={link} />}
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <p className="leading-relaxed m-0 text-sm text-slate-700 dark:text-portfolio-white">{description}</p>
            </div>

            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="w-full overflow-hidden">
                    <div className="h-full flex items-start">
                        <TechList techs={techsForDisplay} />
                    </div>
                </div>
            )}
        </div>
    );
};
