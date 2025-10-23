import { useMemo, useState, useEffect } from "react";
import { TechList } from "./components/TechList/TechList";
import type { Technology } from "../../global";
import { CircleImage } from "./components/CircleImage/CircleImage";
import { TechTicker } from "./components/TechTicker/TechTicker";
import { CTAButton } from "../../components/shared/CTAButton/CTAButton";
import { Rocket, BookOpen, Lightbulb } from "lucide-react";
import { ScrollSection } from "../../components/shared/ScrollSection/ScrollSection";

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

    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (!scrollContainer) return;

        const handleScroll = () => {
            const scrollPosition = scrollContainer.scrollTop;
            const viewportHeight = window.innerHeight;
            const sectionIndex = Math.round(scrollPosition / viewportHeight);
            setActiveSection(sectionIndex);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    const heroSection = (
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12 md:gap-16 px-8">
            <div className="flex flex-col justify-between w-full md:w-2/3">
                <h1 className="p-0 m-0 text-4xl md:text-5xl lg:text-6xl text-portfolio-cyan font-lunasima whitespace-nowrap">
                    <strong className="text-portfolio-white">Hey, I'm</strong>
                    <span className="text-portfolio-green text-[larger] drop-shadow-[0px_0px_20px_black]">
                        {` ${name}`} 👋🏽
                    </span>
                </h1>
                <div className="flex flex-col gap-4 text-portfolio-white text-lg md:text-xl font-lunasima text-left">
                    <p>I'm the sole developer at Shep</p>
                    <p>I'm an Ironhack alum and former assistant teacher</p>
                    <p>I enjoy building cool solutions to people's pet peeves</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <CTAButton
                        onClick={() => document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' })}
                        text="My stack"
                        icon={Rocket}
                    />
                    <CTAButton
                        onClick={() => window.location.href = '/experience'}
                        text="My story"
                        icon={BookOpen}
                    />
                    <CTAButton
                        onClick={() => window.location.href = '/projects'}
                        text="My solutions"
                        icon={Lightbulb}
                    />
                </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square">
                <CircleImage image="/images/hero.jpg" text={name || "Benjamin"} />
            </div>
        </div>
    );

    const techSection = (
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

    return (
        <>
            <ScrollSection>
                {[heroSection, techSection]}
            </ScrollSection>

            {/* Tech Ticker - positioned above footer */}
            <div className="fixed bottom-[10dvh] left-0 right-0 w-full z-40 pointer-events-none">
                <div className="pointer-events-auto">
                    <TechTicker technologies={technologies} isVisible={activeSection === 0} />
                </div>
            </div>
        </>
    );
};
