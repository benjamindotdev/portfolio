import { useMemo, useCallback } from 'react';
import type { Technology } from '@/global';

/**
 * Custom hook to filter and sort technologies by type
 * @param technologies - Array of technologies
 * @returns Object with categorized technology arrays
 */
export const useTechnologyCategories = (technologies: Technology[] = []) => {
    const filterAndSortTechnologies = useCallback((type: string): Technology[] => {
        return technologies
            ?.filter((tech) => tech.type === type)
            .sort((a, b) => {
                if (a.isLearning === b.isLearning) {
                    return a.isLearning ? a.key - b.key : a.key - b.key;
                }
                return a.isLearning ? 1 : -1;
            });
    }, [technologies]);

    const frontEnd = useMemo(
        () => filterAndSortTechnologies("Frontend"),
        [filterAndSortTechnologies]
    );

    const backEnd = useMemo(
        () => filterAndSortTechnologies("Backend"),
        [filterAndSortTechnologies]
    );

    const database = useMemo(
        () => filterAndSortTechnologies("Database"),
        [filterAndSortTechnologies]
    );

    const cicd = useMemo(
        () => filterAndSortTechnologies("CI/CD"),
        [filterAndSortTechnologies]
    );

    const projectManagement = useMemo(
        () => filterAndSortTechnologies("Project Management"),
        [filterAndSortTechnologies]
    );

    const contentManagement = useMemo(
        () => filterAndSortTechnologies("Content Management"),
        [filterAndSortTechnologies]
    );

    const tools = useMemo(
        () => filterAndSortTechnologies("Tool"),
        [filterAndSortTechnologies]
    );

    const mobile = useMemo(
        () => filterAndSortTechnologies("Mobile"),
        [filterAndSortTechnologies]
    );

    const cloud = useMemo(
        () => filterAndSortTechnologies("Cloud"),
        [filterAndSortTechnologies]
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

    return {
        frontEnd,
        backEnd,
        database,
        cicd,
        projectManagement,
        contentManagement,
        tools,
        mobile,
        cloud,
        pageContent
    };
};
