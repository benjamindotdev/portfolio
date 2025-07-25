import { LazyLoadImage } from "react-lazy-load-image-component";
import { ExperienceItem, Tech, Technology } from "../../global";
import { LinkButton } from "../LinkButton/LinkButton";
import { SubHeading } from "../SubHeading/SubHeading";
import { TechList } from "../TechList/TechList";
import { technologies } from "../../constants";

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
        <li key={experience.key} className="experience-card">
            <div className="experience-card-header">
                <div className="experience-card-info">
                    <LazyLoadImage
                        className="experience-card-logo"
                        src={logo}
                        alt={company}
                        effect="blur"
                        loading="lazy"
                    />
                    <div className="experience-card-text">
                        <div className="experience-card-title-row">
                            <SubHeading text={`${title} @ ${company}`} />
                            <span className="experience-date">{date}</span>
                        </div>
                        <div className="experience-card-company">
                            <p>{type}, {location}</p>
                            {isCurrent && <span className="current-badge">Current</span>}
                        </div>
                    </div>
                </div>
                {link && <LinkButton link={link} />}
            </div>

            <div className="experience-card-content">
                <p className="experience-description">{description}</p>

                {details && details.length > 0 && (
                    <ul className="experience-details">
                        {details.map((detail) => (
                            <li key={detail.key}>✅ {detail.text}</li>
                        ))}
                    </ul>
                )}
            </div>

            {techsForDisplay && techsForDisplay.length > 0 && (
                <div className="experience-card-tech">
                    <TechList techs={techsForDisplay} />
                </div>
            )}
        </li>
    );
};
