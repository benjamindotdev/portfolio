import { ExperienceItem, Certification, Project, Tech, Technology } from "@/global";
import { LinkButton } from "../LinkButton/LinkButton";
import { SubHeading } from "../SubHeading/SubHeading";
import { TechList } from "../TechList/TechList";
import { benjamin } from "@/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { Separator } from "../Separator/Separator";
import { Badge } from "../Badge/Badge";
import { MetadataText } from "../MetadataText/MetadataText";

type CardProps = {
    item: ExperienceItem | Certification | Project;
    type: 'experience' | 'certification' | 'project';
};

export const Card = ({ item, type }: CardProps) => {
    const { theme } = useTheme();

    // Transform techStack for consistent display
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

    // Get the appropriate properties based on item type
    const getCardData = () => {
        if (type === 'experience') {
            const exp = item as ExperienceItem;
            return {
                title: `${exp.title} @ ${exp.company}`,
                subtitle: `${exp.type}, ${exp.location}`,
                date: exp.date,
                description: exp.description,
                logo: exp.logo,
                link: exp.link,
                techStack: exp.techStack,
                details: exp.details,
                status: exp.isCurrent ? 'Current' : undefined,
            };
        } else if (type === 'certification') {
            const cert = item as Certification;
            return {
                title: cert.name,
                subtitle: cert.company,
                subtitle2: cert.location,
                date: cert.date,
                description: cert.description,
                logo: cert.logo,
                link: cert.link,
                repoLink: cert.repoLink,
                deployedLink: cert.deployedLink,
                techStack: undefined,
                details: undefined,
                status: cert.level,
            };
        } else {
            const proj = item as Project;
            return {
                title: proj.name,
                subtitle: undefined,
                date: undefined,
                description: proj.description,
                logo: proj.image,
                link: proj.deployedLink || proj.repoLink,
                techStack: proj.techStack,
                details: undefined,
                status: proj.status === 'completed' ? 'Completed' : proj.status,
            };
        }
    };

    const cardData = getCardData();
    const techsForDisplay = cardData.techStack ? transformTechStack(cardData.techStack) : [];

    // Get the appropriate logo image based on theme
    const getLogoSrc = (logo: string | { lightImage: string; darkImage: string }) => {
        if (typeof logo === "string") {
            return logo;
        }
        return theme === "dark" ? logo.darkImage : logo.lightImage;
    };

    return (
        <div className="w-full h-full grid grid-rows-[auto_auto_1fr_auto] gap-2 text-slate-700 dark:text-white text-left">
            {/* Header - Row 1 */}
            <div className="w-full flex flex-row justify-between items-start">
                <div className="flex flex-row items-center gap-6">
                    <img
                        className="h-auto w-12 rounded"
                        src={getLogoSrc(cardData.logo)}
                        alt={cardData.title}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SubHeading text={cardData.title} />
                        <div className="flex flex-row items-center gap-4 flex-wrap">
                            {cardData.subtitle && <MetadataText>{cardData.subtitle}</MetadataText>}
                            {cardData.subtitle && cardData.subtitle2 && <Separator />}
                            {cardData.subtitle2 && <MetadataText>{cardData.subtitle2}</MetadataText>}
                            {(cardData.subtitle || cardData.subtitle2) && cardData.date && <Separator />}
                            {cardData.date && (
                                <span className="text-sm opacity-80 whitespace-nowrap text-slate-700 dark:text-portfolio-white">{cardData.date}</span>
                            )}
                            {cardData.status && (
                                <>
                                    {(cardData.date || cardData.subtitle || cardData.subtitle2) && <Separator />}
                                    <Badge
                                        text={cardData.status}
                                        variant={cardData.status === 'Current' ? 'current' : 'default'}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    {cardData.repoLink && (
                        <a href={cardData.repoLink} target="_blank" rel="noopener noreferrer">
                            <img
                                className="h-6 w-6 opacity-70 hover:opacity-100 transition-opacity"
                                src="logos/github.svg"
                                alt="GitHub Repository"
                            />
                        </a>
                    )}
                    {cardData.deployedLink && (
                        <a href={cardData.deployedLink} target="_blank" rel="noopener noreferrer">
                            <img
                                className="h-6 w-6 opacity-70 hover:opacity-100 transition-opacity"
                                src="icons/link.svg"
                                alt="Live Site"
                            />
                        </a>
                    )}
                    {cardData.link && <LinkButton link={cardData.link} />}
                </div>
            </div>

            {/* Description - Row 2 */}
            <div className="w-full">
                <p className="leading-relaxed m-0 text-slate-700 dark:text-portfolio-white">{cardData.description}</p>
            </div>

            {/* Details/Bullet Points - Row 3 (flexible) */}
            <div className="w-full flex items-start">
                {cardData.details && cardData.details.length > 0 && (
                    <ul className="m-0 pl-0 list-none text-sm text-slate-700 dark:text-portfolio-white">
                        {cardData.details.map((detail) => (
                            <li key={detail.key} className="mb-1.5 leading-snug last:mb-0">
                                ✅ {detail.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Tech Stack - Row 4 */}
            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="w-full min-h-[4rem]">
                    <div className="h-full flex items-start">
                        <TechList techs={techsForDisplay} />
                    </div>
                </div>
            )}
        </div>
    );
};
