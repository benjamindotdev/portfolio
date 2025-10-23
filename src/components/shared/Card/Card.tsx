import { ExperienceItem, Certification, Project, Tech, Technology } from "../../../global";
import { LinkButton } from "../LinkButton/LinkButton";
import { SubHeading } from "../SubHeading/SubHeading";
import { TechList } from "../../../routes/Home/components/TechList/TechList";
import { technologies } from "../../../constants";

type CardProps = {
    item: ExperienceItem | Certification | Project;
    type: 'experience' | 'certification' | 'project';
};

export const Card = ({ item, type }: CardProps) => {
    // Transform techStack for consistent display
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
                subtitle: `${cert.company}, ${cert.location}`,
                date: undefined,
                description: cert.description,
                logo: cert.logo,
                link: cert.link,
                techStack: undefined,
                details: undefined,
                status: undefined,
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

    return (
        <div className="w-full h-full grid grid-rows-[auto_auto_1fr_auto] gap-2 text-white text-left">
            {/* Header - Row 1 */}
            <div className="w-full flex flex-row justify-between items-start">
                <div className="flex flex-row items-center gap-6">
                    <img
                        className="h-auto w-12 rounded"
                        src={cardData.logo}
                        alt={cardData.title}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SubHeading text={cardData.title} />
                        <div className="flex flex-row items-center gap-4 flex-wrap">
                            {cardData.date && (
                                <span className="text-sm opacity-80 whitespace-nowrap">{cardData.date}</span>
                            )}
                            {cardData.date && cardData.subtitle && <span className="opacity-60">|</span>}
                            {cardData.subtitle && <p className="m-0 text-sm">{cardData.subtitle}</p>}
                            {cardData.status && (
                                <>
                                    {(cardData.date || cardData.subtitle) && <span className="opacity-60">|</span>}
                                    <span className={`px-2 py-1 rounded-xl text-xs font-bold ${cardData.status === 'Current'
                                        ? 'bg-green-600 text-green-100'
                                        : 'bg-zinc-600 text-zinc-300'
                                        }`}>
                                        {cardData.status}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {cardData.link && <LinkButton link={cardData.link} />}
            </div>

            {/* Description - Row 2 */}
            <div className="w-full">
                <p className="leading-relaxed m-0">{cardData.description}</p>
            </div>

            {/* Details/Bullet Points - Row 3 (flexible) */}
            <div className="w-full flex items-start">
                {cardData.details && cardData.details.length > 0 && (
                    <ul className="m-0 pl-0 list-none text-sm">
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
