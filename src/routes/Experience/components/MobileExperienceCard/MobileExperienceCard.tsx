import { LazyLoadImage } from "react-lazy-load-image-component";
import { ExperienceItem, Tech, Technology } from "@/global";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { TechList } from "@/components/shared/TechList/TechList";
import { benjamin } from "@/constants";
import { useTheme } from "../../../../contexts/ThemeContext";
import { Separator } from "@/components/shared/Separator/Separator";
import { Badge } from "@/components/shared/Badge/Badge";
import { SkillBadge } from "@/components/shared/SkillBadge/SkillBadge";
import { MetadataText } from "@/components/shared/MetadataText/MetadataText";

export const MobileExperienceCard = ({
    experience,
}: {
    experience: ExperienceItem;
}) => {
    const { theme } = useTheme();
    const { title, company, location, date, description, details, techStack, skills, logo, type, isCurrent } = experience;

    const logoSrc = typeof logo === "string"
        ? logo
        : theme === "dark"
            ? logo.darkImage
            : logo.lightImage;

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
                        className: (foundTech.name === "Express" || foundTech.name === "MongoDB") ? "ml-12" : "",
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

    return (
        <div className="w-full h-full flex items-center justify-start pl-4">
            <div className="w-[92%] flex flex-col gap-4 text-slate-700 dark:text-white text-left border border-zinc-500 rounded-lg p-6 overflow-y-auto ">
                {/* Header */}
                <div className="flex flex-col gap-3 w-full">
                    {/* Row 1: Title */}
                    <div className="w-full">
                        <SubHeading text={title} className="text-xl"/>
                    </div>

                    {/* Row 2: Logo | @ Company */}
                    <div className="flex flex-row items-center gap-3 w-full flex-wrap">
                        <LazyLoadImage
                            className="h-8 w-8 rounded object-contain"
                            src={logoSrc}
                            alt={company}
                            loading="lazy"
                        />
                        <span className="text-base font-semibold text-slate-700 dark:text-white">@ {company}</span>
                    </div>

                    {/* Row 3: Date */}
                    <div className="w-full">
                        <MetadataText>{date}</MetadataText>
                    </div>

                    {/* Row 4: Type | Location | Current */}
                    <div className="flex flex-row items-center gap-3 flex-nowrap">
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

                {/* Description */}
                <div className="w-full">
                    <p className="leading-relaxed m-0 text-sm text-slate-700 dark:text-portfolio-white">{description}</p>
                </div>

                {/* Details */}
                <div className="w-full">
                    {details && details.length > 0 && (
                        <ul className="m-0 pl-0 list-none text-sm text-slate-700 dark:text-portfolio-white flex flex-col gap-2">
                            {details.map((detail) => (
                                <li key={detail.key} className="leading-snug">
                                    ✅ {detail.text}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tech Stack */}
                {(techsForDisplay && techsForDisplay.length > 0) || (skills && skills.length > 0) ? (
                    <div className="w-full flex flex-col gap-4 my-4">
                        {techsForDisplay && techsForDisplay.length > 0 && (
                            <div className="w-full flex justify-center">
                                <TechList 
                                    techs={techsForDisplay} 
                                    logoClassName="h-8 w-auto max-w-[120px]" 
                                    className="flex flex-wrap justify-center gap-4 text-portfolio-h3"
                                    itemClassName="w-[28%]"
                                />
                            </div>
                        )}
                        {skills && skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                {skills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
};
