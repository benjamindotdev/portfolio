import { useMemo } from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import { TechList } from "../../components/TechList/TechList";
import type { Technology } from "../../global";
import { CircleImage } from "../../components/CircleImage/CircleImage";

export const Home = ({
    technologies = [],
    image,
    name,
}: {
    technologies?: Technology[];
    image?: string;
    name?: string;
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
        <PageContainer id="home">
            <PageHeader>
                <div className="home-page-header">
                    <div className="home-title-wrapper">
                        <PageTitle text="Hey, I'm" strongText={name} main icon="👋🏽" />
                        <PageTitle text="Full-stack" strongText="web developer" icon="👨🏽‍💻" />
                        <PageTitle text="Ironhack" strongText="TA" icon="🚀" />
                    </div>
                    <CircleImage image={image || ""} text="Benjamin" />
                </div>
            </PageHeader>
            <PageContent>
                {pageContent.map(
                    (content) =>
                        content.techs.length > 0 && (
                            <TechList key={content.subHeading} {...content} />
                        )
                )}
            </PageContent>
        </PageContainer>
    );
};
