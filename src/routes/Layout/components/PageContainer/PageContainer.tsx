import { useSpring, animated } from "@react-spring/web";

export const PageContainer = ({
    id,
    children,
}: {
    id: string;
    children: React.ReactNode;
}) => {
    const springs = useSpring({
        from: { opacity: 0, scale: 0.75 },
        to: { opacity: 1, scale: 1 },
    });

    return (
        <animated.section id={id} className="min-h-screen w-full flex flex-col justify-start items-center" style={{ ...springs }}>
            {children}
        </animated.section>
    );
};
