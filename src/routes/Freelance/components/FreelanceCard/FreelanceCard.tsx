import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { SkillBadge } from "@/components/shared/SkillBadge/SkillBadge";
import { useTheme } from "@/contexts/ThemeContext";
import { LogoImage } from "@/components/shared/LogoImage/LogoImage";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";

export const FreelanceCard = ({
    project,
}: {
    project: Project;
}) => {
    const { theme } = useTheme();
    const { name, description, subTitle, deployedLink, repoLink, packageLink, image, client, tags } = project;

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    const techsForDisplay = useStackscanTechs(project);
    const link = deployedLink || repoLink || packageLink;

    return (
        <div
            className="w-full flex flex-col gap-4 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-portfolio-green p-4"
            style={{ gridTemplateRows: 'auto auto auto auto' }}
        >
            {/* Header */}
            <div className="w-full flex flex-row justify-between items-start">
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


            <div className="flex gap-2 items-baseline">

                <p className="text-base font-semibold m-0 text-slate-700 dark:text-portfolio-white">{subTitle}</p>

                <p className="leading-relaxed m-0 text-sm italic text-slate-700 dark:text-portfolio-white">{description}</p>

            </div>

            {/* Client Need, Solution & Challenge */}
            {(client?.needed || client?.solution || client?.challenge) && (
                <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 items-center">
                    {client.needed && (
                        <>
                            <span className="text-sm">🎯</span>
                            <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{client.needed}</p>
                        </>
                    )}
                    {client.solution && (
                        <>
                            <span className="text-sm">🧠</span>
                            <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{client.solution}</p>
                        </>
                    )}
                    {client.challenge && (
                        <>
                            <span className="text-sm">⚙️</span>
                            <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{client.challenge}</p>
                        </>
                    )}
                </div>
            )}

            {client?.image && client?.name &&
                <div className="w-full grid grid-cols-[auto_auto_1fr] gap-4 items-start">
                    <div className="flex items-center gap-4">
                        <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-medium text-slate-700 dark:text-portfolio-white text-nowrap">{client.name}</p>
                            <p className="text-xs opacity-80 text-slate-700 dark:text-portfolio-white text-nowrap">{client.position}</p>
                        </div>
                    </div>

                    {client.linkedIn && (
                        <div className="flex h-full items-center">

                            <LogoImage
                                image={{
                                    lightImage: "logos/socials/linkedInBlack.png",
                                    darkImage: "logos/socials/linkedInWhite.png"
                                }}
                                name="LinkedIn"
                                link={client.linkedIn}
                            />
                        </div>
                    )}

                    <blockquote className="text-sm italic opacity-90 text-slate-700 dark:text-portfolio-white">
                        "{client.testimonial}"
                    </blockquote>
                </div>
            }

            {/* Tech Stack */}
            {((techsForDisplay && techsForDisplay.length > 0) || (tags && tags.length > 0)) && (
                <div className="w-full flex justify-between items-center">
                    {techsForDisplay && techsForDisplay.length > 0 && (
                        <TechList techs={techsForDisplay} />
                    )}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 items-center">
                            {tags.map((tag, index) => (
                                <SkillBadge key={index} skill={tag} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
