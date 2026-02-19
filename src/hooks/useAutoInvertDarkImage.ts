import { useEffect, useState } from 'react';

export const useAutoInvertDarkImage = (imageUrl: string) => {
    const [shouldInvert, setShouldInvert] = useState(false);

    useEffect(() => {
        if (!imageUrl) return;

        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.drawImage(img, 0, 0);
            
            try {
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                let r, g, b, avg;
                let colorSum = 0;
                let count = 0;

                for (let x = 0; x < data.length; x += 4) {
                    r = data[x];
                    g = data[x + 1];
                    b = data[x + 2];
                    const alpha = data[x + 3];

                    // Only consider non-transparent pixels
                    if (alpha > 0) {
                        avg = Math.floor((r + g + b) / 3);
                        colorSum += avg;
                        count++;
                    }
                }

                if (count > 0) {
                    const brightness = Math.floor(colorSum / count);
                    // If brightness is low (dark), we should invert in dark mode
                    // Threshold around 60 seems reasonable for very dark logos
                    if (brightness < 60) {
                        setShouldInvert(true);
                    }
                }
            } catch (e) {
                // If CORS or other error prevents reading pixel data, do nothing
                console.warn('Could not analyze image for auto-inversion', e);
            }
        };
    }, [imageUrl]);

    return shouldInvert;
};
