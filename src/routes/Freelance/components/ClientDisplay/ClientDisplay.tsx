import { LazyLoadImage } from "react-lazy-load-image-component";

export const ClientDisplay = ({
    name,
    position,
    image,
    testimonial,
}: {
    name?: string;
    position?: string;
    image?: string;
    testimonial?: string;
}) => {
    const displayName = name || "Client Name";
    const displayPosition = position || "Position Title";
    const displayImage = image || "images/placeholder.jpg";
    const displayTestimonial = testimonial || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className="w-full flex flex-col gap-6 text-slate-700 dark:text-white">
            <div className="flex flex-row items-center gap-4">
                <LazyLoadImage
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-300 dark:border-portfolio-white flex-shrink-0"
                    src={displayImage}
                    alt={displayName}
                    loading="lazy"
                />
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg md:text-xl font-bold">{displayName}</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">{displayPosition}</p>
                </div>
            </div>
            <blockquote className="border-l-4 border-portfolio-green pl-6 py-2">
                <p className="text-base md:text-lg italic text-slate-600 dark:text-slate-300">
                    "{displayTestimonial}"
                </p>
            </blockquote>
        </div>
    );
};
