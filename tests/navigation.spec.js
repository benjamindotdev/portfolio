import { test, expect } from '@playwright/test';
test.describe('Navigation', () => {
    test('should navigate to About page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /about/i }).click();
        await expect(page).toHaveURL(/\/about/);
        await expect(page.getByText(/about me/i).or(page.getByText(/skills/i))).toBeVisible();
    });
    test('should navigate to Experience page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /experience/i }).click();
        await expect(page).toHaveURL(/\/experience/);
    });
    test('should navigate to Projects page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /projects/i }).click();
        await expect(page).toHaveURL(/\/projects/);
    });
    test('should navigate to Certifications page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /certifications/i }).click();
        await expect(page).toHaveURL(/\/certifications/);
    });
    test('should navigate back to home using browser back', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: /about/i }).click();
        await expect(page).toHaveURL(/\/about/);
        await page.goBack();
        await expect(page).toHaveURL('/');
    });
    test('should handle invalid routes gracefully', async ({ page }) => {
        await page.goto('/invalid-route-that-does-not-exist');
        // App should still load (React Router catch-all)
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });
    test('should have navigation structure present', async ({ page }) => {
        await page.goto('/about');
        // Verify navigation exists
        const nav = page.locator('nav, [role="navigation"]');
        await expect(nav.first()).toBeVisible();
        // Verify there are navigation links
        const navLinks = page.locator('nav a, [role="navigation"] a');
        const count = await navLinks.count();
        expect(count).toBeGreaterThan(0);
    });
});
