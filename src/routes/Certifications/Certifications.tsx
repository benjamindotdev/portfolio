import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageTitle } from "../Layout/components/PageTitle/PageTitle";
import { PageHeader } from "../Layout/components/PageHeader/PageHeader";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import type { Certification } from "../../global";
import { ListContainer } from "../../components/shared/ListContainer/ListContainer";

export const Certifications = ({
    certifications,
}: {
    certifications: Certification[];
}) => {
    return (
        <PageContainer id="certifications">
            <PageHeader>
                <PageTitle text="Certifications" strongText="& Awards" main icon="📜" />
            </PageHeader>
            <PageContent>
                <ListContainer
                    items={certifications}
                    type="certification"
                    layout="grid"
                />
            </PageContent>
        </PageContainer>
    );
};
