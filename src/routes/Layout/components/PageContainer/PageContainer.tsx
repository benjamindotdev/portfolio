export const PageContainer = ({
    id,
    children,
}: {
    id: string;
    children: React.ReactNode;
}) => {
    return (
        <section id={id} className="min-h-screen w-full flex flex-col justify-start items-center animate-fadeIn">
            {children}
        </section>
    );
};
