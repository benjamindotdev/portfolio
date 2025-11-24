import { useMemo } from "react";
import { TechList } from "@/components/shared/TechList/TechList";
import type { Technology } from "@/global";
import { PageContainer } from "@/routes/Layout/components";

export const Stack = ({
    technologies = [],
}: {
    technologies?: Technology[];
}) => {
    const filterBySection = (
        technologies: Technology[],
        section: string
    ): Technology[] => {
        return technologies
            ?.filter((tech) => tech.stackSection === section)
            .sort((a, b) => a.key - b.key);
    };

    const coreTechnologies = useMemo(
        () => filterBySection(technologies, "Core Technologies"),
        [technologies]
    );
    const additionalTools = useMemo(
        () => filterBySection(technologies, "Additional Tools"),
        [technologies]
    );
    const otherExperience = useMemo(
        () => filterBySection(technologies, "Other Experience"),
        [technologies]
    );
    const currentlyExploring = useMemo(
        () => filterBySection(technologies, "Currently Exploring"),
        [technologies]
    );

    const pageContent = useMemo(
        () => [
            { techs: coreTechnologies, subHeading: "Core Technologies" },
            { techs: additionalTools, subHeading: "Additional Tools" },
            { techs: otherExperience, subHeading: "Other Experience" },
            { techs: currentlyExploring, subHeading: "Currently Exploring" },
        ],
        [
            coreTechnologies,
            additionalTools,
            otherExperience,
            currentlyExploring,
        ]
    );

    return (
        <PageContainer id="stack" layout="hero">
            <div className="w-full flex flex-col items-center justify-center gap-20">
                {pageContent.map(
                    (content) =>
                        content.techs.length > 0 && (
                            <TechList key={content.subHeading} {...content} />
                        )
                )}
            </div>
        </PageContainer>
    );
};
