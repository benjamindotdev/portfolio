import { ScrollSection } from "@/components/shared/ScrollSection/ScrollSection";

export const PageContainer = ({
    id,
    children,
    layout = "default",
}: {
    id: string;
    children: React.ReactNode;
    layout?: "default" | "scroll" | "hero";
}) => {
    const getLayoutClasses = () => {
        switch (layout) {
            case "scroll":
                return "min-h-screen w-full h-full flex flex-col justify-center items-center";
            case "hero":
                return "w-full h-full flex items-center justify-center px-8 py-12";
            case "default":
            default:
                return "min-h-screen w-full h-full flex flex-col justify-center items-center";
        }
    };

    const renderContent = () => {
        if (layout === "scroll") {
            return <ScrollSection>{children}</ScrollSection>;
        }

        if (layout === "hero") {
            return (
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                    {children}
                </div>
            );
        }

        // default layout
        return (
            <div className="h-full w-full flex items-stretch justify-center p-4 md:p-8">
                <div className="w-full flex flex-col gap-8">
                    {children}
                </div>
            </div>
        );
    };

    return (
        <section id={id} className={getLayoutClasses()}>
            {renderContent()}
        </section>
    );
};
