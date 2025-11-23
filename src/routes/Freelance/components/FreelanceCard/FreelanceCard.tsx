import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project, Tech, Technology } from "../../../../global";
import { LinkButton } from "../../../../components/shared/LinkButton/LinkButton";
import { SubHeading } from "../../../../components/shared/SubHeading/SubHeading";
import { TechList } from "../../../Home/components/TechList/TechList";
import { benjamin } from "../../../../constants";

export const FreelanceCard = ({
    project,
}: {
    project: Project;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { name, description, techStack, deployedLink, repoLink, image, client } = project;

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
                        isLearning: foundTech.isLearning,
                    };
                }
                return {
                    key: index,
                    name: tech,
                    image: "",
                    link: "",
                    isLearning: false,
                };
            }
            return {
                key: tech.key || index,
                name: tech.name,
                image: tech.image || "",
                link: tech.link || "",
                isLearning: tech.isLearning || false,
            };
        });
    };

    const techsForDisplay = techStack ? transformTechStack(techStack) : [];
    const link = deployedLink || repoLink;

    return (
        <div
            className={`w-full flex flex-col gap-4 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-portfolio-green p-4 grayscale hover:grayscale-0 cursor-pointer ${isExpanded ? "min-h-[400px]" : "min-h-[200px]"
                }`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="w-full flex flex-row justify-between items-start">
                <div className="flex flex-row items-center gap-6">
                    <LazyLoadImage
                        className="h-auto w-12 rounded"
                        src={image}
                        alt={name}
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SubHeading text={name} />
                        {client && (
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Client: {client.name}
                                {client.position && ` • ${client.position}`}
                            </p>
                        )}
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            <div className="w-full">
                <p className="leading-relaxed m-0 text-sm">{description}</p>
            </div>

            {isExpanded && (
                <>
                    {techsForDisplay && techsForDisplay.length > 0 && (
                        <div className="w-full">
                            <div className="h-full flex items-start">
                                <TechList techs={techsForDisplay} />
                            </div>
                        </div>
                    )}

                    {client?.linkedIn && (
                        <div className="w-full">
                            <a
                                href={client.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-portfolio-green hover:underline text-sm"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Client Profile on LinkedIn →
                            </a>
                        </div>
                    )}

                    {client?.testimonial && (
                        <div className="w-full border-l-4 border-portfolio-green pl-4 py-2">
                            <p className="text-sm italic text-slate-600 dark:text-slate-300">
                                "{client.testimonial}"
                            </p>
                            {client.name && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                    — {client.name}{client.position && `, ${client.position}`}
                                </p>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
