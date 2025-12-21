import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project, Tech, Technology } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { LogoImage } from "@/components/shared/LogoImage/LogoImage";
import { benjamin } from "@/constants";
import { useTheme } from "@/contexts/ThemeContext";

export const MobileFreelanceCard = ({
    project,
}: {
    project: Project;
}) => {
    const { theme } = useTheme();
    const { name, description, subTitle, techStack, deployedLink, repoLink, image, client } = project;

    const imageSrc = typeof image === "string"
        ? image
        : theme === "dark"
            ? image.darkImage
            : image.lightImage;

    // Transform techStack similar to ProjectSection
    const transformTechStack = (
        techStack: Technology[] | string[]
    ): Tech[] => {
        return techStack.map((tech, index) => {
            if (typeof tech === "string") {
                const foundTech = benjamin.technologies.find(
                    (technology) => technology.name === tech
                );
                if (foundTech) {
                    return {
                        key: foundTech.key,
                        name: foundTech.name,
                        image: foundTech.image,
                        link: foundTech.link,
                    };
                }
                return {
                    key: index,
                    name: tech,
                    image: "",
                    link: "",
                };
            }
            return {
                key: tech.key || index,
                name: tech.name,
                image: tech.image || "",
                link: tech.link || "",
            };
        });
    };

    const techsForDisplay = techStack ? transformTechStack(techStack) : [];
    const link = deployedLink || repoLink;

    return (
        <div className="w-full h-full flex items-center justify-center px-4">
            <div className="w-full max-h-[80vh] flex flex-col gap-2 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg p-6 overflow-y-auto scrollbar-hide">
                {/* Header */}
                <div className="w-full flex flex-row justify-between items-start">
                    <div className="flex flex-row items-center gap-6">
                        <LazyLoadImage
                            className="h-auto w-8 rounded"
                            src={imageSrc}
                            alt={name}
                            loading="lazy"
                        />
                        <div className="flex flex-col gap-2 flex-1">
                            <SubHeading text={name} className="text-xl"/>
                        </div>
                    </div>
                    {link && <LinkButton link={link} />}
                </div>

                <div className="flex gap-2 items-baseline flex-wrap">
                    <p className="text-sm font-semibold m-0 text-slate-700 dark:text-portfolio-white">{subTitle}</p>
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
                                <span className="text-sm">💡</span>
                                <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{client.solution}</p>
                            </>
                        )}
                        {client.challenge && (
                            <>
                                <span className="text-sm">⚡</span>
                                <p className="text-sm leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{client.challenge}</p>
                            </>
                        )}
                    </div>
                )}

                {/* Testimonial & Client Details */}
                {client?.image && client?.name && (
                    <div className="flex flex-col gap-4 w-full">
                        {/* Quote (full width) */}
                        <blockquote className="text-sm italic opacity-90 text-slate-700 dark:text-portfolio-white w-full">
                            "{client.testimonial}"
                        </blockquote>

                        {/* Client Details: Image | Name/Role | LinkedIn */}
                        <div className="flex flex-row items-center gap-4">
                            <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex flex-col justify-center">
                                <p className="text-sm font-medium text-slate-700 dark:text-portfolio-white text-nowrap">{client.name}</p>
                                <p className="text-xs opacity-80 text-slate-700 dark:text-portfolio-white text-nowrap">{client.position}</p>
                            </div>
                            
                            {client.linkedIn && (
                                <div className="ml-auto">
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
                        </div>
                    </div>
                )}

                {/* Tech Stack */}
                {techsForDisplay.length > 0 && (
                    <div className="w-full mt-auto">
                        <TechList techs={techsForDisplay} />
                    </div>
                )}
            </div>
        </div>
    );
};
