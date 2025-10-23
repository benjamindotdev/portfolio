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
        <div className="w-[48%] h-[54%] grid [grid-template-rows:minmax(0,20%)_minmax(0,10%)_minmax(0,20%)_minmax(0,50%)] gap-2 text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-white p-4 grayscale hover:grayscale-0">
            {/* Header - 20% */}
            <div className="w-full flex flex-row justify-between items-start overflow-hidden">
                <div className="flex flex-row items-center gap-6">
                    <LazyLoadImage
                        className="h-auto w-12 rounded"
                        src={logo}
                        alt={company}
                        loading="lazy"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SubHeading text={`${title} @ ${company}`} />
                        <div className="flex flex-row items-center gap-4 flex-wrap">
                            <span className="text-sm opacity-80 whitespace-nowrap">{date}</span>
                            <span className="opacity-60">|</span>
                            <p className="m-0 text-sm">{type}, {location}</p>
                            {isCurrent && (
                                <>
                                    <span className="opacity-60">|</span>
                                    <span className="bg-green-600 text-green-100 px-2 py-1 rounded-xl text-xs font-bold">
                                        Current
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            {/* Description - 10% */}
            <div className="w-full overflow-hidden">
                <p className="leading-relaxed m-0 text-sm">{description}</p>
            </div>

            {/* Details/Bullet Points - 50% */}
            <div className="w-full flex items-start overflow-hidden">
                {details && details.length > 0 && (
                    <ul className="m-0 pl-0 list-none text-sm">
                        {details.map((detail) => (
                            <li key={detail.key} className="mb-1.5 leading-snug last:mb-0">
                                ✅ {detail.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Tech Stack - 20% */}
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
