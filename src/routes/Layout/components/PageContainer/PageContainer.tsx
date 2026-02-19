import { ScrollSection } from "@/components/shared/ScrollSection/ScrollSection";

export const PageContainer = ({
    id,
    children,
    layout = "default",
    className = "",
}: {
    id: string;
    children: React.ReactNode;
    layout?: "default" | "scroll" | "hero";
    className?: string;
}) => {
    const getLayoutClasses = () => {
        const baseClasses = (() => {
            switch (layout) {
                case "scroll":
                    return "w-full h-full flex flex-col justify-start md:justify-center items-center";
                case "hero":
                    return "w-full h-full flex items-start md:items-center justify-center px-4 md:px-8 py-12 overflow-y-auto";
                case "default":
                default:
                    return "w-full h-full flex flex-col justify-start md:justify-center items-center";
            }
        })();
        return `${baseClasses} ${className}`.trim();
    };

    const renderContent = () => {
        if (layout === "scroll") {
            return (
                <div className="w-full h-full animate-fadeIn">
                    <ScrollSection>{children}</ScrollSection>
                </div>
            );
        }

        if (layout === "hero") {
            return (
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 animate-fadeIn">
                    {children}
                </div>
            );
        }

        // default layout
        return (
            <div className="h-full w-full flex items-start justify-center px-4 md:px-8 overflow-y-auto scrollbar scrollbar-thumb-portfolio-green scrollbar-track-transparent hover:scrollbar-thumb-portfolio-green/80 animate-fadeIn">
                <div className={`w-full flex flex-col gap-8 ${className}`.trim()}>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <section id={id} className={getLayoutClasses().replace(className, '').trim()}>
            {renderContent()}
        </section>
    );
};
