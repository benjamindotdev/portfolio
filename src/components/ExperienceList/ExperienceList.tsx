import type { ExperienceItem } from "../../global";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";

export const ExperienceList = ({
    experience,
}: {
    experience: ExperienceItem[];
}) => {
    return (
        <ul className="experience-list">
            {experience &&
                experience.map((experienceItem) => (
                    <ExperienceCard
                        key={experienceItem.key}
                        experience={experienceItem}
                    />
                ))}
        </ul>
    );
};
