import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project, Tech, Technology } from "@/global";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { benjamin } from "@/constants";
import { Separator } from "@/components/shared/Separator/Separator";
import { MetadataText } from "@/components/shared/MetadataText/MetadataText";
import { ViewClientBadge } from "@/components/shared/ViewClientBadge/ViewClientBadge";

export const FreelanceCard = ({
    project,
}: {
    project: Project;
}) => {
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
            className="w-full grid gap-2 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-portfolio-green p-4 grayscale hover:grayscale-0"
            style={{ gridTemplateRows: 'auto auto auto auto' }}
        >
            {/* Header */}
            <div className="w-full flex flex-row justify-between items-start overflow-hidden">
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
                            <div className="flex flex-row items-center gap-4 flex-wrap">
                                <span className="text-sm opacity-80 whitespace-nowrap text-slate-700 dark:text-portfolio-white">Client: {client.name}</span>
                                {client.position && (
                                    <>
                                        <Separator />
                                        <MetadataText>{client.position}</MetadataText>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            {/* Description */}
            <div className="w-full overflow-hidden">
                <p className="leading-relaxed m-0 text-sm text-slate-700 dark:text-portfolio-white">{description}</p>
            </div>

            {/* Testimonial (if exists) */}
            {client?.testimonial && (
                <div className="w-full flex items-start">
                    <blockquote className="m-0 pl-4 border-l-2 border-portfolio-green text-sm italic opacity-90 text-slate-700 dark:text-portfolio-white">
                        "{client.testimonial}"
                        {client.name && (
                            <footer className="text-xs opacity-70 mt-2 not-italic">
                                — {client.name}{client.position && `, ${client.position}`}
                            </footer>
                        )}
                    </blockquote>
                </div>
            )}

            {/* Tech Stack */}
            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="w-full h-full flex items-end">
                    <div className="w-full flex items-start justify-between gap-3">
                        <TechList techs={techsForDisplay} />
                        {client?.linkedIn && (
                            <div className="flex flex-wrap gap-2 items-center self-end pb-2">
                                <ViewClientBadge linkedIn={client.linkedIn} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
