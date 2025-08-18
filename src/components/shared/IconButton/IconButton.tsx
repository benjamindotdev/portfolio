export const IconButton = ({
    children,
    text,
    disabled,
}: {
    children: React.ReactNode;
    text: string;
    disabled?: boolean;
}) => (
    <button
        className={`bg-transparent cursor-pointer border-none h-[30px] w-[30px] ${disabled
            ? "text-portfolio-gray opacity-50 cursor-not-allowed hover:text-portfolio-gray"
            : "text-portfolio-cyan hover:text-portfolio-green"
            }`}
        type="button"
        disabled={disabled}
    >
        {children}
        <p className="hidden">{text}</p>
    </button>
);
