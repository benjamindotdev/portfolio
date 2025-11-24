import { BREAKPOINTS, SPACING, ANIMATIONS, Z_INDEX } from './constants';

describe('Theme Constants', () => {
    describe('BREAKPOINTS', () => {
        it('defines all breakpoint sizes', () => {
            expect(BREAKPOINTS.xs).toBe('480px');
            expect(BREAKPOINTS.sm).toBe('640px');
            expect(BREAKPOINTS.md).toBe('768px');
            expect(BREAKPOINTS.lg).toBe('1024px');
            expect(BREAKPOINTS.xl).toBe('1280px');
            expect(BREAKPOINTS['2xl']).toBe('1536px');
        });
    });

    describe('SPACING', () => {
        it('defines all spacing sizes', () => {
            expect(SPACING.xs).toBe('0.25rem');
            expect(SPACING.sm).toBe('0.5rem');
            expect(SPACING.md).toBe('1rem');
            expect(SPACING.lg).toBe('1.5rem');
            expect(SPACING.xl).toBe('2rem');
            expect(SPACING['2xl']).toBe('3rem');
            expect(SPACING['3xl']).toBe('4rem');
        });
    });

    describe('ANIMATIONS', () => {
        it('defines transition speeds', () => {
            expect(ANIMATIONS.transition.fast).toBe('150ms ease-in-out');
            expect(ANIMATIONS.transition.normal).toBe('300ms ease-in-out');
            expect(ANIMATIONS.transition.slow).toBe('500ms ease-in-out');
        });

        it('defines hover effects', () => {
            expect(ANIMATIONS.hover.scale).toBe('scale(1.05)');
            expect(ANIMATIONS.hover.lift).toBe('translateY(-2px)');
        });
    });

    describe('Z_INDEX', () => {
        it('defines z-index values', () => {
            expect(Z_INDEX.dropdown).toBe(1000);
            expect(Z_INDEX.sticky).toBe(1020);
            expect(Z_INDEX.fixed).toBe(1030);
            expect(Z_INDEX.modal).toBe(1040);
        });
    });
});
