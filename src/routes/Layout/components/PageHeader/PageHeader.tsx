export const PageHeader = ({ children }: { children: React.ReactNode }) => {
    return <header className="w-full flex items-center flex-col justify-evenly gap-16 py-8">{children}</header>;
};
