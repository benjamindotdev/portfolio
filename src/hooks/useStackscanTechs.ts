import { useEffect, useMemo, useState } from "react";
import type { ExperienceItem, Project, Tech, Technology } from "@/global";
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
                    image: foundTech.image || "",
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
        const relativePath = item.relativePath?.replace(/^\.\/public\//, "/");
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

const cache = new Map<string, Tech[]>();

export const useStackscanTechs = (item: Project | ExperienceItem): Tech[] => {
    const [stackscanTechs, setStackscanTechs] = useState<Tech[] | null>(() => {
        if (item.stackscanKey && cache.has(item.stackscanKey)) {
            return cache.get(item.stackscanKey) || null;
        }
        return null;
    });

    const fallbackTechs = useMemo(
        () => (item.techStack ? transformTechStack(item.techStack) : []),
        [item.techStack]
    );

    useEffect(() => {
        let isMounted = true;

        const loadStackscan = async () => {
            if (!item.stackscanKey) {
                if (isMounted) {
                    setStackscanTechs(null);
                }
                return;
            }

            if (cache.has(item.stackscanKey)) {
                if (isMounted) {
                    setStackscanTechs(cache.get(item.stackscanKey)!);
                }
                return;
            }

            try {
                const response = await fetch(`/stackscan/${item.stackscanKey}/stack.json`);
                if (!response.ok) {
                    if (isMounted) {
                        setStackscanTechs(null);
                    }
                    return;
                }

                const data = (await response.json()) as StackscanItem[];
                const mappedTechs = mapStackscanItems(data);
                
                if (item.stackscanKey) {
                    cache.set(item.stackscanKey, mappedTechs);
                }

                if (isMounted) {
                    setStackscanTechs(mappedTechs);
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
    }, [item.stackscanKey]);

    return stackscanTechs ?? fallbackTechs;
};
