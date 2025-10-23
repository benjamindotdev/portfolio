import { useMemo } from "react";
import { PageTitle } from "../Layout/components/PageTitle/PageTitle";
import { TechList } from "./components/TechList/TechList";
import type { Technology } from "../../global";
import { CircleImage } from "./components/CircleImage/CircleImage";

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
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Top Section - Hero */}
            <section className="h-screen w-full snap-start flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 px-8">
                    <div className="flex flex-col items-start gap-4">
                        <PageTitle text="Hey, I'm" strongText={name} main icon="👋🏽" />
                        <PageTitle text="Full-stack" strongText="Web Dev" icon="👨🏽‍💻" />
                        <PageTitle text="Ironhack" strongText="Alumni" icon="🤘🏽" />
                    </div>
                    <CircleImage image={image || ""} text={name || "Benjamin"} />
                </div>
            </section>

            {/* Bottom Section - Tech Stack */}
            <section className="min-h-screen w-full snap-start flex items-center justify-center bg-gray-800">
                <div className="w-full max-w-6xl px-8 py-16">
                    <div className="flex flex-col gap-8">
                        {pageContent.map(
                            (content) =>
                                content.techs.length > 0 && (
                                    <TechList key={content.subHeading} {...content} />
                                )
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
