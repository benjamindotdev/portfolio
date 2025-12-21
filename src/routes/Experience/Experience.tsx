import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { ExperienceItem } from "@/global";
import { ExperienceList } from "./components/ExperienceList/ExperienceList";
import { MobileExperienceCard } from "./components/MobileExperienceCard/MobileExperienceCard";

export const Experience = ({
    experience,
}: {
    experience: ExperienceItem[];
}) => {
    // Sort by most recent first (assuming higher key = more recent)
    const sortedExperience = [...experience].sort((a, b) => b.key - a.key);

    return (
        <>
            <div className="md:hidden w-full h-full">
                <PageContainer id="experience-mobile" layout="scroll">
                    {sortedExperience.map((item) => (
                        <MobileExperienceCard
                            experience={item}
                            key={item.key}
                        />
                    ))}
                </PageContainer>
            </div>
            <div className="hidden md:block w-full h-full">
                <PageContainer id="experience-desktop">
                    <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="flex-1">
                            <ExperienceList experience={sortedExperience} />
                        </div>
                    </div>
                </PageContainer>
            </div>
        </>
    );
};
