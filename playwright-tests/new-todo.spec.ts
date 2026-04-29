import { expect, test } from '@playwright/test';

test('creates a new todo3', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();

  await page.getByPlaceholder('What needs to be done?').fill('Demo');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.locator('.todo-list')).toContainText('Demo');
});
