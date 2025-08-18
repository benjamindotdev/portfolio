import { LazyLoadImage } from "react-lazy-load-image-component";
import { ExperienceItem, Tech, Technology } from "../../../../global";
import { LinkButton } from "../../../../components/shared/LinkButton/LinkButton";
import { SubHeading } from "../../../../components/shared/SubHeading/SubHeading";
import { TechList } from "../../../Home/components/TechList/TechList";
import { technologies } from "../../../../constants";

export const ExperienceCard = ({
    experience,
}: {
    experience: ExperienceItem;
}) => {
    const { title, company, location, date, description, details, techStack, link, logo, type, isCurrent } = experience;

    // Transform techStack similar to ProjectSection
    const transformTechStack = (
        techStack: Technology[] | string[]
    ): Tech[] => {
        return techStack.map((tech, index) => {
            if (typeof tech === "string") {
                const foundTech = technologies.find(
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

    return (
        <div className="w-full flex flex-col gap-4 text-white text-left">
            {/* Header */}
            <div className="w-full flex flex-row justify-between items-start">
                <div className="flex flex-row items-center gap-6">
                    <LazyLoadImage
                        className="h-auto w-12 rounded"
                        src={logo}
                        alt={company}
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex flex-row justify-between items-baseline gap-4 flex-wrap">
                            <SubHeading text={`${title} @ ${company}`} />
                            <span className="text-sm opacity-80 whitespace-nowrap">{date}</span>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <p className="m-0">{type}, {location}</p>
                            {isCurrent && (
                                <span className="bg-zinc-600 text-zinc-300 px-2 py-1 rounded-xl text-xs font-bold">
                                    Current
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            {/* Content */}
            <div className="w-full">
                <p className="leading-relaxed m-0 mb-4">{description}</p>

                {details && details.length > 0 && (
                    <ul className="mt-4 mb-0 pl-0 list-none">
                        {details.map((detail) => (
                            <li key={detail.key} className="mb-2 leading-normal last:mb-0">
                                ✅ {detail.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Tech Stack */}
            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="w-full mt-2">
                    <TechList techs={techsForDisplay} />
                </div>
            )}
        </div>
    );
};
