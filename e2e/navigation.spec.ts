import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
	test('home page loads with content', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('.p-name')).toContainText('Andriy Tyurnikov');
		await expect(page.locator('.p-job-title')).toContainText('Web Developer');
		await expect(page.locator('.ui-photo')).toBeVisible();
	});

	test('home to garage navigation via CTA', async ({ page }) => {
		await page.goto('/');
		await page.click('text=MY GARAGE');
		await expect(page).toHaveURL('/garage');
		await expect(page.locator('text=Work with the garage door up').first()).toBeVisible();
	});

	test('garage page shows experiment links', async ({ page }) => {
		await page.goto('/garage');
		await expect(page.locator('text=Field of View Map')).toBeVisible();
		await expect(page.locator('text=Ergonomic Typography')).toBeVisible();
		await expect(page.locator('text=Mobile-first Layouts')).toBeVisible();
		await expect(page.locator('text=Glowing Ice Animations')).toBeVisible();
	});

	test('garage to fov-map navigation', async ({ page }) => {
		await page.goto('/garage');
		await page.click('text=Field of View Map');
		await expect(page).toHaveURL('/garage/fov-map');
	});

	test('fov-map back to garage', async ({ page }) => {
		// Navigate to fov-map via garage to have history
		await page.goto('/garage');
		await page.click('text=Field of View Map');
		await expect(page).toHaveURL('/garage/fov-map');
		await page.goBack();
		await expect(page).toHaveURL('/garage');
	});

	test('navbar home link works', async ({ page }) => {
		await page.goto('/garage');
		await page.click('a.ui-navbar-item >> text=Home');
		await expect(page).toHaveURL('/');
	});

	test('navbar friends link works', async ({ page }) => {
		await page.goto('/');
		// Navigate to garage first to access navbar
		await page.click('text=MY GARAGE');
		await expect(page).toHaveURL('/garage');
		await page.click('a.ui-navbar-item >> text=Friends');
		await expect(page).toHaveURL('/friends');
	});

	test('navbar about link works', async ({ page }) => {
		await page.goto('/garage');
		await page.click('a.ui-navbar-item >> text=About');
		await expect(page).toHaveURL('/about');
	});

	test('direct URL access works', async ({ page }) => {
		await page.goto('/garage');
		await expect(page.locator('text=Work with the garage door up')).toBeVisible();

		await page.goto('/friends');
		await expect(page).toHaveURL('/friends');

		await page.goto('/about');
		await expect(page).toHaveURL('/about');
	});

	test('browser back button navigation', async ({ page }) => {
		await page.goto('/');
		await page.click('text=MY GARAGE');
		await expect(page).toHaveURL('/garage');

		await page.click('text=Field of View Map');
		await expect(page).toHaveURL('/garage/fov-map');

		await page.goBack();
		await expect(page).toHaveURL('/garage');

		await page.goBack();
		await expect(page).toHaveURL('/');
	});
});
