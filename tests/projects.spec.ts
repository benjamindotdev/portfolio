import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should display project cards', async ({ page }) => {
    // Check that project cards are rendered
    const projectCards = page.locator('[class*="card"]').or(page.locator('article'));
    await expect(projectCards.first()).toBeVisible({ timeout: 10000 });
  });

  test('should display project titles', async ({ page }) => {
    // Check for any heading that looks like a project title
    const headings = page.locator('h2, h3, h4').filter({ hasText: /./  });
    await expect(headings.first()).toBeVisible({ timeout: 10000 });
  });

  test('should have links to project details or external sites', async ({ page }) => {
    // Check for project links (GitHub, deployed site, etc.)
    const projectLinks = page.locator('a[href*="github"]').or(page.locator('a[href*="http"]'));
    const count = await projectLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display tech stack logos', async ({ page }) => {
    // Check for tech logos in projects
    const techImages = page.locator('img[alt*="logo"]').or(page.locator('img').filter({ hasNot: page.locator('[alt*="Benjamin"]') }));
    await expect(techImages.first()).toBeVisible({ timeout: 10000 });
  });

  test('should have project descriptions', async ({ page }) => {
    // Check for text content in project cards
    const descriptions = page.locator('p').filter({ hasText: /./  });
    await expect(descriptions.first()).toBeVisible({ timeout: 10000 });
  });

  test('should load images properly', async ({ page }) => {
    // Wait for any image to load
    const images = page.locator('img');
    await expect(images.first()).toBeVisible({ timeout: 10000 });
    
    // Check that at least one image has loaded
    const firstImage = images.first();
    const naturalWidth = await firstImage.evaluate((img: HTMLImageElement) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/projects');
    
    // Check that content is still visible on mobile
    const content = page.locator('main, [role="main"], body');
    await expect(content.first()).toBeVisible();
  });

  test('should be responsive on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/projects');
    
    // Check that content is still visible on tablet
    const content = page.locator('main, [role="main"], body');
    await expect(content.first()).toBeVisible();
  });
});
