import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import type { ExperienceItem } from "../../global";
import { ExperienceList } from "../../components/ExperienceList/ExperienceList";

export const Experience = ({
    experience,
}: {
    experience: ExperienceItem[];
}) => {
    return (
        <PageContainer id="experience">
            <PageHeader>
                <PageTitle text="Experience" strongText="& Work" main icon="💼" />
            </PageHeader>
            <PageContent>
                <ExperienceList experience={experience} />
            </PageContent>
        </PageContainer>
    );
};
