import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { SkillBadge } from "@/components/shared/SkillBadge/SkillBadge";
import { useTheme } from "@/contexts/ThemeContext";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";

export const MobileProjectCard = ({
    project,
}: {
    project: Project;
}) => {
    const { theme } = useTheme();
    const { name, subTitle,description, deployedLink, repoLink, packageLink, image, tags, createdBy, reason } = project;

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    const techsForDisplay = useStackscanTechs(project);

    return (
        <div className="w-full h-full flex items-center justify-center px-4">
            <div className="w-full max-h-[85vh] flex flex-col gap-4 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg p-6 overflow-y-auto scrollbar-hide">
                {/* Header */}
                <div className="w-full flex flex-row justify-between items-start shrink-0">
                    <div className="flex flex-row items-center gap-4">
                        <LazyLoadImage
                            className="h-auto w-8 rounded"
                            src={imageSrc}
                            alt={name}
                            loading="lazy"
                        />
                        <div className="flex flex-col gap-2 flex-1">
                            <SubHeading text={name} className="text-xl" url={deployedLink ? deployedLink : undefined} />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {packageLink && (
                            <a href={packageLink} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                                <img src="logos/socials/npm.png" alt="npm" className="h-auto max-w-10" />
                            </a>
                        )}
                        {repoLink && (
                            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                                <img src={theme === "dark" ? "logos/socials/githubWhite.png" : "logos/socials/githubBlack.png"} alt="GitHub" className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>

                {/* {createdBy && (
                    <div className="w-full flex items-center gap-2 shrink-0">
                        <a href={createdBy.link} target="_blank" rel="noopener noreferrer" title={createdBy.name}>
                            <img 
                                src={createdBy.image} 
                                alt={createdBy.name} 
                                className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-transform" 
                            />
                        </a>
                    </div>
                )} */}

                <div className="flex gap-2 items-baseline flex-wrap">
                    <p className="text-sm font-semibold m-0 text-slate-700 dark:text-portfolio-white">{subTitle}</p>
                    <p className="leading-relaxed m-0 text-sm italic text-slate-700 dark:text-portfolio-white">{description}</p>
                </div>

                {/* Reason: Needed, Solution & Challenge */}
                {(reason?.needed || reason?.solution || reason?.challenge) && (
                    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
                        {reason.needed && (
                            <>
                                <span className="text-sm">💡</span>
                                <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{reason.needed}</p>
                            </>
                        )}
                        {reason.solution && (
                            <>
                                <span className="text-sm">🧠</span>
                                <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{reason.solution}</p>
                            </>
                        )}
                        {reason.challenge && (
                            <>
                                <span className="text-sm">⚡</span>
                                <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{reason.challenge}</p>
                            </>
                        )}
                    </div>
                )}

                {/* Tech Stack */}
                {((techsForDisplay && techsForDisplay.length > 0) || (tags && tags.length > 0)) && (
                    <div className="w-full mt-auto flex flex-col gap-4">
                        {techsForDisplay && techsForDisplay.length > 0 && (
                            <TechList techs={techsForDisplay} />
                        )}
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                {tags.map((tag, index) => (
                                    <SkillBadge key={index} skill={tag} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
