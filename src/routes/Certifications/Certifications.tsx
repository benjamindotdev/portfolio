import { PageContainer } from "../Layout/components/PageContainer/PageContainer";
import { PageContent } from "../Layout/components/PageContent/PageContent";
import type { Certification } from "../../global";
import { ListContainer } from "../../components/shared/ListContainer/ListContainer";

export const Certifications = ({
    certifications,
}: {
    certifications: Certification[];
}) => {
    // Sort by most recent first (assuming higher key = more recent)
    const sortedCertifications = [...certifications].sort((a, b) => b.key - a.key);

    return (
        <PageContainer id="certifications">
            <PageContent>
                <div className="h-full w-full flex items-stretch justify-center p-4 md:p-8">
                    <div className="w-full flex flex-col gap-4 md:gap-8">
                        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                            {sortedCertifications.slice(0, 2).map((cert) => (
                                <div key={cert.key} className="flex-1">
                                    <ListContainer
                                        items={[cert]}
                                        type="certification"
                                        layout="grid"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
                            {sortedCertifications.slice(2, 4).map((cert) => (
                                <div key={cert.key} className="flex-1">
                                    <ListContainer
                                        items={[cert]}
                                        type="certification"
                                        layout="grid"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PageContent>
        </PageContainer>
    );
};
