import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { SkillBadge } from "@/components/shared/SkillBadge/SkillBadge";
import { useTheme } from "@/contexts/ThemeContext";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";

export const ProjectCard = ({
    project,
}: {
    project: Project;
}) => {
    const { theme } = useTheme();
    const { name, description, deployedLink, repoLink, packageLink, image, tags, createdBy } = project;

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    const techsForDisplay = useStackscanTechs(project);
    const link = deployedLink || repoLink || packageLink;

    return (
        <div className="w-full md:w-[48%] min-h-[300px] flex flex-col gap-4 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-portfolio-green p-4">
            <div className="w-full flex flex-row justify-between items-start overflow-hidden shrink-0">
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

            {createdBy && (
                <div className="w-full flex items-center gap-2 shrink-0">
                    <a href={createdBy.link} target="_blank" rel="noopener noreferrer" title={createdBy.name}>
                        <img 
                            src={createdBy.image} 
                            alt={createdBy.name} 
                            className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-transform" 
                        />
                    </a>
                </div>
            )}

            <div className="w-full overflow-hidden flex-1">
                <p className="leading-relaxed m-0 text-sm text-slate-700 dark:text-portfolio-white">{description}</p>
            </div>

            {(techsForDisplay && techsForDisplay.length > 0) || (tags && tags.length > 0) ? (
                <div className="w-full shrink-0 mt-auto">
                    <div className="h-full flex items-center justify-between">
                        {techsForDisplay && techsForDisplay.length > 0 && (
                            <TechList techs={techsForDisplay} />
                        )}
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 items-center self-end pb-2">
                                {tags.map((tag, index) => (
                                    <SkillBadge key={index} skill={tag} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
