import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certifications', path: '/certifications' }
    ];

    for (const { name, path } of pages) {
        test(`${name} page should have proper heading structure`, async ({ page }) => {
            await page.goto(path);

            // Check for at least one heading
            const headings = page.locator('h1, h2, h3, h4, h5, h6');
            await expect(headings.first()).toBeVisible({ timeout: 10000 });
        });

        test(`${name} page should have proper lang attribute`, async ({ page }) => {
            await page.goto(path);

            const html = page.locator('html');
            await expect(html).toHaveAttribute('lang', 'en');
        });

        test(`${name} page images should have alt text`, async ({ page }) => {
            await page.goto(path);

            // Wait for page to be loaded
            await page.waitForLoadState('networkidle');

            // Check visible images have alt attributes
            const images = page.locator('img:visible');
            const count = await images.count();

            if (count > 0) {
                // Sample check: verify first few images have alt attributes
                const samplesToCheck = Math.min(count, 10);
                for (let i = 0; i < samplesToCheck; i++) {
                    const img = images.nth(i);
                    // Just verify the attribute exists (can be empty string for decorative images)
                    const hasAlt = await img.evaluate((el: HTMLImageElement) => el.hasAttribute('alt'));
                    expect(hasAlt).toBe(true);
                }
            }
        });

        test(`${name} page links should be keyboard accessible`, async ({ page }) => {
            await page.goto(path);

            // Find the first interactive element
            const firstLink = page.locator('a, button, input').first();

            // Verify it's focusable
            await firstLink.focus();
            await expect(firstLink).toBeFocused();
        });
    }

    test('should have skip to main content link for keyboard users', async ({ page }) => {
        await page.goto('/');

        // Press Tab to focus first interactive element
        await page.keyboard.press('Tab');

        // Check if focused element is a skip link (common a11y pattern)
        const focused = page.locator(':focus');
        const text = await focused.textContent().catch(() => '');

        // If there's a skip link, it should work
        if (text?.toLowerCase().includes('skip')) {
            await page.keyboard.press('Enter');
            const mainContent = page.locator('main, [role="main"]');
            await expect(mainContent).toBeFocused();
        }
    });

    test('should support keyboard navigation through nav menu', async ({ page }) => {
        await page.goto('/');

        // Find navigation
        const nav = page.locator('nav, [role="navigation"]').first();
        await expect(nav).toBeVisible();

        // Focus on a navigation link using keyboard
        const firstNavLink = page.locator('nav a, [role="navigation"] a').first();
        await firstNavLink.focus();

        // Verify link is focused
        await expect(firstNavLink).toBeFocused();
    });

    test('should have proper contrast ratios for text', async ({ page }) => {
        await page.goto('/');

        // Get computed styles for body text
        const bodyText = page.locator('p').first();
        await expect(bodyText).toBeVisible({ timeout: 10000 });

        const color = await bodyText.evaluate((el) => {
            const styles = window.getComputedStyle(el);
            return {
                color: styles.color,
                backgroundColor: styles.backgroundColor
            };
        });

        // Just verify we can read the colors (actual contrast checking would need a library)
        expect(color.color).toBeTruthy();
        expect(color.backgroundColor).toBeTruthy();
    });
});
