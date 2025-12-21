import { PageContainer } from "@/routes/Layout/components/PageContainer/PageContainer";
import type { Project } from "@/global";
import { FreelanceCard } from "./components/FreelanceCard/FreelanceCard";
import { MobileFreelanceCard } from "./components/MobileFreelanceCard/MobileFreelanceCard";

export const Freelance = ({ projects }: { projects?: Project[] }) => {
    // Filter for freelance projects only
    const freelanceProjects = projects
        ?.filter((project) => project.status === "completed" && project.type === "freelance")
        .sort((a, b) => a.key - b.key) || [];

    return (
        <>
            <div className="md:hidden w-full h-full">
                <PageContainer id="freelance-mobile" layout="scroll">
                    {freelanceProjects.map((project) => (
                        <MobileFreelanceCard key={project.key} project={project} />
                    ))}
                </PageContainer>
            </div>
            <div className="hidden md:block w-full h-full">
                <PageContainer id="freelance-desktop">
                    {freelanceProjects.map((project) => (
                        <FreelanceCard key={project.key} project={project} />
                    ))}
                </PageContainer>
            </div>
        </>
    );
};
