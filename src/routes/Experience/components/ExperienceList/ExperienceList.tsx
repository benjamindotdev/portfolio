import type { ExperienceItem } from "../../../../global";
import { ListContainer } from "../../../../components/shared/ListContainer/ListContainer";

export const ExperienceList = ({
    experience,
}: {
    experience: ExperienceItem[];
}) => {
    const reversedExperience = [...experience].reverse();

    return (
        <ListContainer
            items={reversedExperience}
            type="experience"
            layout="grid"
        />
    );
};
