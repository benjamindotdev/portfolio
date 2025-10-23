export const AboutImage = ({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) => {
    return (
        <div className="w-full max-w-2xl h-[500px] mx-auto overflow-hidden rounded-2xl border-5 border-portfolio-white drop-shadow-[0px_0px_5px_white]">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};
