export const HeroImage = ({
    image,
    text,
}: {
    image: string;
    text: string;
}) => {
    return (
        <div className="w-full h-full aspect-square rounded-2xl [clip-path:url(#pixelBClip)] ">
            <img
                src={image}
                alt={text}
                className="w-full h-full object-contain object-center grayscale"
                loading="eager"
                fetchPriority="high"
            />
        </div>
    );
};
