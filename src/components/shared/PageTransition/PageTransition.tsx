import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage('fade-out');
        }
    }, [location, displayLocation]);

    useEffect(() => {
        if (transitionStage === 'fade-out') {
            const timeout = setTimeout(() => {
                setDisplayLocation(location);
                setTransitionStage('fade-in');
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [transitionStage, location]);

    return (
        <div
            className={`h-full transition-opacity duration-300 ${transitionStage === 'fade-out' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {children}
        </div>
    );
};
