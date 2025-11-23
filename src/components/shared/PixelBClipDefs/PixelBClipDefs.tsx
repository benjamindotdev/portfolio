export function PixelBClipDefs() {
    return (
        <svg width="0" height="0" className="absolute">
            <defs>
                <clipPath id="pixelBClip" clipPathUnits="objectBoundingBox">
                    {/* Scaled to 1.5x then reduced by 20% (1.5 * 0.8 = 1.2x original) */}
                    {/* Top square: 0.353 * 0.8 = 0.282 */}
                    <rect x="0.08" y="0.06" width="0.282" height="0.282" rx="0.08" ry="0.08" />
                    {/* Bottom square: 0.706 * 0.8 = 0.565 */}
                    <rect x="0.08" y="0.40" width="0.565" height="0.565" rx="0.08" ry="0.08" />
                </clipPath>
            </defs>
        </svg>
    );
}
