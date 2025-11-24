import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { Certification } from "@/global";
import { ListContainer } from "@/components/shared/ListContainer/ListContainer";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";

export const Certifications = ({
    certifications,
}: {
    certifications: Certification[];
}) => {
    // Group by category in the specified order
    const categories: ("Professional Certifications" | "Skills Courses" | "Awards & Achievements")[] = [
        "Professional Certifications",
        "Skills Courses",
        "Awards & Achievements"
    ];

    const groupedCertifications = categories.map(category => ({
        category,
        items: certifications
            .filter(cert => cert.category === category)
    })).filter(group => group.items.length > 0);

    return (
        <PageContainer id="certifications">
            {groupedCertifications.map(({ category, items }) => (
                <div key={category} className="flex flex-col gap-4">
                    <SubHeading text={category} />
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-wrap">
                        {items.map((cert) => (
                            <div key={cert.key} className="flex-1 min-w-[300px]">
                                <ListContainer
                                    items={[cert]}
                                    type="certification"
                                    layout="grid"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </PageContainer>
    );
};
