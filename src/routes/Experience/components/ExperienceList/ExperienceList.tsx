import type { ExperienceItem } from "../../../../global";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";

export const ExperienceList = ({
    experience,
}: {
    experience: ExperienceItem[];
}) => {
    return (
        <div className="w-full h-full flex flex-row flex-wrap justify-between gap-8">
            {experience.map((item) => (
                <ExperienceCard experience={item} key={item.key} />
            ))}
        </div>
    );
};
