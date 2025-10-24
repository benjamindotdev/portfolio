export const CircleImage = ({
    image,
    text,
}: {
    image: string;
    text: string;
}) => {
    return (
        <div className="w-full h-full aspect-square overflow-hidden rounded-2xl border-5 border-portfolio-white drop-shadow-[0px_0px_5px_white]">
            <img
                src={image}
                alt={text}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
            />
        </div>
    );
};
