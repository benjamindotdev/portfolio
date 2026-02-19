import { useMemo } from "react";
import { TechList } from "@/components/shared/TechList/TechList";
import type { Technology } from "@/global";
import { PageContainer } from "@/routes/Layout/components";
import { useStackscanTechs } from "@/hooks/useStackscanTechs";

const coreTechnologiesProject = { stackscanKey: "core-technologies" } as any;
const additionalToolsProject = { stackscanKey: "additional-tools" } as any;
const otherExperienceProject = { stackscanKey: "other-experience" } as any;
const currentlyExploringProject = { stackscanKey: "currently-exploring" } as any;

// Updated order definition for each section
const ORDER = {
    "Core Technologies": [
        "TypeScript",
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
    ],
    "Additional Tools": [
        "Zustand",
        "Figma",
        "Vite",
        "GitHub Copilot",
        "Stripe",
        "Jest",
        "Testing Library", // Stackscan name for React Testing Library
        "Vercel",
    ],
    "Other Experience": [
        "Material UI", 
        "shadcn/ui", // Stackscan name
        "Mantine",
        "MongoDB",
        "Convex",
        "Netlify",
        "Railway",
        "Notion",
        "Trello",
        "Slack",
    ],
    "Currently Exploring": [
        "GraphQL",
        "Docker",
        "Expo",
    ],
};

const sortTechs = (techs: any[], sectionName: keyof typeof ORDER) => {
    if (!techs) return [];
    
    // Flatten the order list to be case-insensitive for easier matching
    const orderList = (ORDER[sectionName] || []);

    return [...techs].sort((a, b) => {
        const getIndex = (name: string) => {
            // Check direct match or case-insensitive match
            const directIndex = orderList.findIndex(item => item === name);
            if (directIndex !== -1) return directIndex;
            
            return orderList.findIndex(item => item.toLowerCase() === name.toLowerCase());
        };

        const indexA = getIndex(a.name);
        const indexB = getIndex(b.name);

        // If both are found in the list, sort by their index
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }

        // If only one is found, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        // If neither is found, keep original order (or sort alphabetically if preferred)
        return 0;
    });
};

export const Stack = ({
    technologies = [],
}: {
    technologies?: Technology[];
}) => {
    // 1. Fetch from stackscan
    const coreTechs = useStackscanTechs(coreTechnologiesProject);
    const additionalTechs = useStackscanTechs(additionalToolsProject);
    const otherTechs = useStackscanTechs(otherExperienceProject);
    const exploringTechs = useStackscanTechs(currentlyExploringProject);

    // 2. Fallback filter function if stackscan fails or is empty
    const filterAndMapBySection = (
        sourceTechnos: Technology[],
        section: string
    ) => {
        return (sourceTechnos || [])
            .filter((tech) => tech.stackSection === section)
            .sort((a, b) => a.key - b.key)
            .map(tech => ({
                key: tech.key,
                name: tech.name,
                image: tech.image,
                link: tech.link,
                className: ""
            }));
    };

    // 3. Combine logic: if hook returned valid array, use it. Else fallback.
    const getTechs = (hookResult: any[], section: string) => {
        if (hookResult && hookResult.length > 0) return hookResult;
        return filterAndMapBySection(technologies, section);
    };

    // Apply sorting to the result
    const finalCore = useMemo(() => sortTechs(getTechs(coreTechs, "Core Technologies"), "Core Technologies"), [coreTechs, technologies]);
    const finalAdditional = useMemo(() => sortTechs(getTechs(additionalTechs, "Additional Tools"), "Additional Tools"), [additionalTechs, technologies]);
    const finalOther = useMemo(() => sortTechs(getTechs(otherTechs, "Other Experience"), "Other Experience"), [otherTechs, technologies]);
    const finalExploring = useMemo(() => sortTechs(getTechs(exploringTechs, "Currently Exploring"), "Currently Exploring"), [exploringTechs, technologies]);

    const pageContent = useMemo(
        () => [
            { techs: finalCore, subHeading: "Core Technologies" },
            { techs: finalAdditional, subHeading: "Additional Tools" },
            { techs: finalOther, subHeading: "Other Experience" },
            { techs: finalExploring, subHeading: "Currently Exploring" },
        ],
        [
            finalCore,
            finalAdditional,
            finalOther,
            finalExploring,
        ]
    );

    return (
        <PageContainer id="stack" layout="hero">
            <div className="w-full flex flex-col items-center justify-center gap-20">
                {pageContent.map(
                    (content) =>
                        content.techs.length > 0 && (
                            <TechList
                                key={content.subHeading}
                                {...content}
                                className={`flex flex-wrap justify-center items-center ${
                                    content.subHeading === "Currently Exploring"
                                        ? "gap-8"
                                        : "gap-4 md:gap-8"
                                }`}
                                itemClassName="w-[16%] md:w-auto"
                            />
                        )
                )}
            </div>
        </PageContainer>
    );
};
