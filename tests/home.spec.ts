import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display the main heading', async ({ page }) => {
        // Check for the main heading text or hero section
        const heading = page.locator('h1, h2').first();
        await expect(heading).toBeVisible();
    });

    test('should display tech logos', async ({ page }) => {
        // Check that tech logos are visible (check for any image)
        const techImages = page.locator('img').filter({ hasNot: page.locator('[alt*="profile"]') });
        await expect(techImages.first()).toBeVisible({ timeout: 10000 });
    });

    test('should have navigation links', async ({ page }) => {
        // Check for main navigation
        await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /experience/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /projects/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /certifications/i })).toBeVisible();
    });

    test('should display hero image', async ({ page }) => {
        // Check for profile image
        const heroImage = page.locator('img[alt*="Benjamin"]').first();
        await expect(heroImage).toBeVisible();
    });

    test('should display interactive buttons', async ({ page }) => {
        // Check for buttons or links (portfolio has interactive elements)
        const links = page.locator('a');
        await expect(links.first()).toBeVisible();
    });

    test('should have proper page title', async ({ page }) => {
        await expect(page).toHaveTitle(/Benjamin Elliott/i);
    });

    test('should have meta description', async ({ page }) => {
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', /.+/);
    });
});
