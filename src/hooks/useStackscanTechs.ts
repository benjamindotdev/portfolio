import { useEffect, useMemo, useState } from "react";
import type { Project, Tech, Technology } from "@/global";
import { benjamin } from "@/constants";

type StackscanItem = {
    name: string;
    relativePath?: string;
    logo?: string;
};

const transformTechStack = (techStack: Technology[] | string[]): Tech[] => {
    return techStack.map((tech, index) => {
        if (typeof tech === "string") {
            const foundTech = benjamin.technologies.find(
                (technology) => technology.name === tech
            );
            if (foundTech) {
                return {
                    key: foundTech.key,
                    name: foundTech.name,
                    image: foundTech.image,
                    link: foundTech.link,
                };
            }
            return {
                key: index,
                name: tech,
                image: "",
                link: "",
            };
        }
        return {
            key: tech.key || index,
            name: tech.name,
            image: tech.image || "",
            link: tech.link || "",
        };
    });
};

const mapStackscanItems = (items: StackscanItem[]): Tech[] => {
    return items.map((item, index) => {
        const relativePath = item.relativePath?.replace(/^\.\/public\//, "");
        const image = relativePath || item.logo || "";
        const foundTech = benjamin.technologies.find(
            (technology) => technology.name.toLowerCase() === item.name.toLowerCase()
        );

        return {
            key: index,
            name: item.name,
            image,
            link: foundTech?.link || item.logo || "",
        };
    });
};

export const useStackscanTechs = (project: Project): Tech[] => {
    const [stackscanTechs, setStackscanTechs] = useState<Tech[] | null>(null);

    const fallbackTechs = useMemo(
        () => (project.techStack ? transformTechStack(project.techStack) : []),
        [project.techStack]
    );

    useEffect(() => {
        let isMounted = true;

        const loadStackscan = async () => {
            if (!project.stackscanKey) {
                if (isMounted) {
                    setStackscanTechs(null);
                }
                return;
            }

            try {
                const response = await fetch(`/stackscan/${project.stackscanKey}/stack.json`);
                if (!response.ok) {
                    if (isMounted) {
                        setStackscanTechs(null);
                    }
                    return;
                }

                const data = (await response.json()) as StackscanItem[];
                if (isMounted) {
                    setStackscanTechs(mapStackscanItems(data));
                }
            } catch {
                if (isMounted) {
                    setStackscanTechs(null);
                }
            }
        };

        loadStackscan();

        return () => {
            isMounted = false;
        };
    }, [project.stackscanKey]);

    return stackscanTechs ?? fallbackTechs;
};
