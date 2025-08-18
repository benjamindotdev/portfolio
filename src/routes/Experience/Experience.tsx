import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageTitle } from "../Layout/components/PageTitle/PageTitle";
import { PageHeader } from "../Layout/components/PageHeader/PageHeader";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import type { ExperienceItem } from "../../global";
import { ExperienceList } from "./components/ExperienceList/ExperienceList";

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
