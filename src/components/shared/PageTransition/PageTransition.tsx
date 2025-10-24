import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div
            className={`h-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {children}
        </div>
    );
};
