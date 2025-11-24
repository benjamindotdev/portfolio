import { truncateText, formatDate, generateId, debounce, isInViewport } from './index';

describe('Utility Functions', () => {
    describe('truncateText', () => {
        it('returns original text if shorter than max length', () => {
            expect(truncateText('Hello', 10)).toBe('Hello');
        });

        it('truncates text longer than max length', () => {
            expect(truncateText('Hello World!', 8)).toBe('Hello Wo...');
        });

        it('handles exact length', () => {
            expect(truncateText('Hello', 5)).toBe('Hello');
        });
    });

    describe('formatDate', () => {
        it('formats Date object', () => {
            const date = new Date('2024-01-15');
            const formatted = formatDate(date);
            expect(formatted).toContain('2024');
            expect(formatted).toContain('January');
        });

        it('formats date string', () => {
            const formatted = formatDate('2024-01-15');
            expect(formatted).toContain('2024');
            expect(formatted).toContain('January');
        });
    });

    describe('generateId', () => {
        it('generates a string ID', () => {
            const id = generateId();
            expect(typeof id).toBe('string');
            expect(id.length).toBeGreaterThan(0);
        });

        it('generates unique IDs', () => {
            const id1 = generateId();
            const id2 = generateId();
            expect(id1).not.toBe(id2);
        });
    });

    describe('debounce', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it('delays function execution', () => {
            const mockFn = jest.fn();
            const debouncedFn = debounce(mockFn, 500);

            debouncedFn();
            expect(mockFn).not.toHaveBeenCalled();

            jest.runAllTimers();
            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('cancels previous calls', () => {
            const mockFn = jest.fn();
            const debouncedFn = debounce(mockFn, 500);

            debouncedFn();
            debouncedFn();
            debouncedFn();

            jest.runAllTimers();
            expect(mockFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('isInViewport', () => {
        it('returns true for element in viewport', () => {
            const element = document.createElement('div');
            jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
                top: 100,
                left: 100,
                bottom: 200,
                right: 200,
                width: 100,
                height: 100,
                x: 100,
                y: 100,
                toJSON: () => {}
            });

            Object.defineProperty(window, 'innerHeight', { value: 1000, writable: true });
            Object.defineProperty(window, 'innerWidth', { value: 1000, writable: true });

            expect(isInViewport(element)).toBe(true);
        });

        it('returns false for element outside viewport', () => {
            const element = document.createElement('div');
            jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
                top: 2000,
                left: 100,
                bottom: 2100,
                right: 200,
                width: 100,
                height: 100,
                x: 100,
                y: 2000,
                toJSON: () => {}
            });

            Object.defineProperty(window, 'innerHeight', { value: 1000, writable: true });
            Object.defineProperty(window, 'innerWidth', { value: 1000, writable: true });

            expect(isInViewport(element)).toBe(false);
        });
    });
});
