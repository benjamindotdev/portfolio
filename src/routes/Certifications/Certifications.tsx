import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { Certification } from "@/global";
import { ListContainer } from "@/components/shared/ListContainer/ListContainer";
import { SubHeading } from "@/components/shared/SubHeading/SubHeading";
import { MobileCertificationCard } from "./components/MobileCertificationCard/MobileCertificationCard";

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
        <>
            {/* Mobile View */}
            <div className="md:hidden w-full h-full">
                <PageContainer id="certifications-mobile" layout="scroll">
                    {groupedCertifications.map(({ category, items }) => (
                        <div key={category} className="w-full h-full flex flex-col items-center justify-start pt-8 pb-20 gap-6 overflow-y-auto scrollbar-hide">
                            <SubHeading text={category} className="w-full text-2xl text-center" />
                            <div className="w-full flex flex-col items-start gap-6 pl-4">
                                {items.map((cert) => (
                                    <MobileCertificationCard
                                        key={cert.key}
                                        certification={cert}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </PageContainer>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block w-full h-full">
                <PageContainer id="certifications">
                    {groupedCertifications.map(({ category, items }) => (
                        <div key={category} className="flex flex-col gap-4">
                            <SubHeading text={category} />
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 flex-wrap">
                                {items.map((cert) => (
                                    <div key={cert.key} className="flex-1 min-w-full md:min-w-[300px]">
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
            </div>
        </>
    );
};
