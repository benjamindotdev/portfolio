import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Report web vitals to analytics or console
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        onCLS(onPerfEntry);
        onINP(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

// Send to Google Analytics (if available)
export const sendToAnalytics = ({ name, delta, value, id }: Metric) => {
    // Use `window.gtag` if available
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', name, {
            event_category: 'Web Vitals',
            event_label: id,
            value: Math.round(name === 'CLS' ? delta * 1000 : delta),
            non_interaction: true,
        });
    }

    // Log to console in development
    if (import.meta.env.DEV) {
        console.log(`[Web Vitals] ${name}:`, {
            value: Math.round(value),
            delta: Math.round(delta),
            id,
            rating: getVitalRating(name, value),
        });
    }
};

// Get rating for web vitals
function getVitalRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    switch (name) {
        case 'CLS':
            if (value <= 0.1) return 'good';
            if (value <= 0.25) return 'needs-improvement';
            return 'poor';
        case 'INP':
            if (value <= 200) return 'good';
            if (value <= 500) return 'needs-improvement';
            return 'poor';
        case 'LCP':
            if (value <= 2500) return 'good';
            if (value <= 4000) return 'needs-improvement';
            return 'poor';
        case 'FCP':
            if (value <= 1800) return 'good';
            if (value <= 3000) return 'needs-improvement';
            return 'poor';
        case 'TTFB':
            if (value <= 800) return 'good';
            if (value <= 1800) return 'needs-improvement';
            return 'poor';
        default:
            return 'needs-improvement';
    }
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export default reportWebVitals;
