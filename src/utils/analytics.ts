// Google Analytics initialization
import { config } from '../config/env';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

/**
 * Initialize Google Analytics
 * Only runs in production with a valid GA ID
 */
export const initializeAnalytics = (): void => {
    const gaId = import.meta.env.VITE_GA_ID;
    
    // Only initialize in production and if GA ID is provided
    if (!config.isProduction || !gaId) {
        console.log('[Analytics] Skipped - not in production or no GA ID');
        return;
    }

    // Create script element for gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer?.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
    });

    console.log('[Analytics] Google Analytics initialized');
};

/**
 * Track a custom event
 */
export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
): void => {
    if (window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

/**
 * Track a page view
 */
export const trackPageView = (url: string): void => {
    if (window.gtag) {
        window.gtag('config', import.meta.env.VITE_GA_ID, {
            page_path: url,
        });
    }
};
