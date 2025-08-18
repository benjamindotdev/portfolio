export const PageContent = ({ children }: { children: React.ReactNode }) => {
    return <main className="h-full w-full flex flex-row items-center justify-between flex-wrap gap-8">{children}</main>;
};
