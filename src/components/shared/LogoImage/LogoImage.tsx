import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const LogoImage = ({
    image,
    name,
    link,
}: {
    image: string;
    name: string;
    link: string;
}) => {
    const isInternal = link.startsWith('/');

    return (
        <Link
            to={link}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer"}
            className="group"
            aria-label={name}
        >
            <LazyLoadImage
                className="h-icon-s w-auto transition-all duration-300 hover:brightness-150 hover:drop-shadow-[0_0_8px_#2bf38b]"
                src={image}
                alt={name}
                loading="lazy"
                style={{
                    filter: 'brightness(1)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(84%) sepia(29%) saturate(2180%) hue-rotate(83deg) brightness(97%) contrast(92%)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(1)';
                }}
            />
        </Link>
    );
};
