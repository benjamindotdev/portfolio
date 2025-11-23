import { useMemo } from "react";
import { TechList } from "../Home/components/TechList/TechList";
import type { Technology } from "../../global";

export const Stack = ({
    technologies = [],
}: {
    technologies?: Technology[];
}) => {
    const filterAndSortTechnologies = (
        technologies: Technology[],
        type: string
    ): Technology[] => {
        return technologies
            ?.filter((tech) => tech.type === type)
            .sort((a, b) => {
                if (a.isLearning === b.isLearning) {
                    return a.isLearning ? a.key - b.key : a.key - b.key;
                }
                return a.isLearning ? 1 : -1;
            });
    };

    const frontEnd = useMemo(
        () => filterAndSortTechnologies(technologies, "Frontend"),
        [technologies]
    );
    const backEnd = useMemo(
        () => filterAndSortTechnologies(technologies, "Backend"),
        [technologies]
    );
    const database = useMemo(
        () => filterAndSortTechnologies(technologies, "Database"),
        [technologies]
    );
    const cicd = useMemo(
        () => filterAndSortTechnologies(technologies, "CI/CD"),
        [technologies]
    );
    const projectManagement = useMemo(
        () => filterAndSortTechnologies(technologies, "Project Management"),
        [technologies]
    );
    const contentManagement = useMemo(
        () => filterAndSortTechnologies(technologies, "Content Management"),
        [technologies]
    );
    const tools = useMemo(
        () => filterAndSortTechnologies(technologies, "Tool"),
        [technologies]
    );
    const mobile = useMemo(
        () => filterAndSortTechnologies(technologies, "Mobile"),
        [technologies]
    );

    const cloud = useMemo(
        () => filterAndSortTechnologies(technologies, "Cloud"),
        [technologies]
    );

    const pageContent = useMemo(
        () => [
            { techs: frontEnd, subHeading: "Front end" },
            { techs: backEnd, subHeading: "Back end" },
            { techs: mobile, subHeading: "Mobile" },
            { techs: database, subHeading: "Databases, ORMs & ODMs" },
            { techs: cicd, subHeading: "CI/CD" },
            { techs: projectManagement, subHeading: "Project Management" },
            { techs: contentManagement, subHeading: "CMS" },
            { techs: cloud, subHeading: "Cloud" },
            { techs: tools, subHeading: "Tools" },
        ],
        [
            frontEnd,
            backEnd,
            mobile,
            database,
            cicd,
            projectManagement,
            contentManagement,
            cloud,
            tools,
        ]
    );

    return (
        <div className="w-full max-w-6xl px-8 py-16 h-full flex items-center justify-center">
            <div className="w-full flex flex-wrap gap-x-12 gap-y-8 items-start content-start">
                {pageContent.map(
                    (content) =>
                        content.techs.length > 0 && (
                            <TechList key={content.subHeading} {...content} />
                        )
                )}
            </div>
        </div>
    );
};
