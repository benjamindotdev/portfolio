import { Card } from "../Card/Card";
import { ExperienceItem, Certification, Project } from "../../../global";

type ListContainerProps<T> = {
    items: T[];
    type: 'experience' | 'certification' | 'project';
    layout?: 'grid' | 'single';
};

export const ListContainer = <T extends ExperienceItem | Certification | Project>({
    items,
    type,
    layout = 'single'
}: ListContainerProps<T>) => {
    const containerClasses = layout === 'grid'
        ? "w-full h-full flex flex-wrap gap-8"
        : "w-full flex flex-col gap-6";

    const itemClasses = layout === 'grid'
        ? "w-full h-full border border-zinc-500 rounded-lg transition-all duration-300 hover:border-white p-4 grayscale hover:grayscale-0"
        : "w-full border border-zinc-300 rounded-lg transition-colors duration-300 hover:border-white p-4";

    return (
        <div className={containerClasses}>
            {items.map((item) => (
                <div key={item.key} className={itemClasses}>
                    <Card item={item} type={type} />
                </div>
            ))}
        </div>
    );
};
