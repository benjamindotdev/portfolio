import { LazyLoadImage } from "react-lazy-load-image-component";
import { ExperienceItem, Tech, Technology } from "../../../../global";
import { LinkButton } from "../../../../components/shared/LinkButton/LinkButton";
import { SubHeading } from "../../../../components/shared/SubHeading/SubHeading";
import { TechList } from "../../../Home/components/TechList/TechList";
import { benjamin } from "../../../../constants";
import { useTheme } from "../../../../contexts/ThemeContext";
import { Separator } from "../../../../components/shared/Separator/Separator";
import { Badge } from "../../../../components/shared/Badge/Badge";
import { SkillBadge } from "../../../../components/shared/SkillBadge/SkillBadge";
import { MetadataText } from "../../../../components/shared/MetadataText/MetadataText";

export const ExperienceCard = ({
    experience,
}: {
    experience: ExperienceItem;
}) => {
    const { theme } = useTheme();
    const { title, company, location, date, description, details, techStack, skills, link, logo, type, isCurrent } = experience;

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

    return (
        <div
            className="w-[48%] grid gap-2 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg transition-all duration-300 hover:border-portfolio-green p-4 grayscale hover:grayscale-0"
            style={{ gridTemplateRows: 'auto auto auto auto' }}
        >
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
                            <MetadataText>{date}</MetadataText>
                            <Separator />
                            <MetadataText>{type}</MetadataText>
                            <Separator />
                            <MetadataText>{location}</MetadataText>
                            {isCurrent && (
                                <>
                                    <Separator />
                                    <Badge text="Current" variant="default" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            {/* Description - 10% */}
            <div className="w-full overflow-hidden">
                <p className="leading-relaxed m-0 text-sm text-slate-700 dark:text-portfolio-white">{description}</p>
            </div>

            {/* Details/Bullet Points - 50% */}
            <div className="w-full flex items-start">
                {details && details.length > 0 && (
                    <ul className="m-0 pl-0 list-none text-sm text-slate-700 dark:text-portfolio-white">
                        {details.map((detail) => (
                            <li key={detail.key} className="mb-1.5 leading-snug last:mb-0">
                                ✅ {detail.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Tech Stack - 20% */}
            {(techsForDisplay && techsForDisplay.length > 0) || (skills && skills.length > 0) ? (
                <div className="w-full h-full flex items-end">
                    <div className="w-full flex items-start justify-between gap-3">
                        {techsForDisplay && techsForDisplay.length > 0 && (
                            <TechList techs={techsForDisplay} />
                        )}
                        {skills && skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 items-center self-end pb-2">
                                {skills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
