import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { ExperienceItem } from "@/global";
import { ExperienceList } from "./components/ExperienceList/ExperienceList";

export const Experience = ({
    experience,
}: {
    experience: ExperienceItem[];
}) => {
    // Sort by most recent first (assuming higher key = more recent)
    const sortedExperience = [...experience].sort((a, b) => b.key - a.key);

    return (
        <PageContainer id="experience">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                    <ExperienceList experience={sortedExperience} />
                </div>
            </div>
        </PageContainer>
    );
};
