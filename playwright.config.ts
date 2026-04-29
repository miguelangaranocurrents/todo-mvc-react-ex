import { defineConfig } from '@playwright/test';
import { currentsReporter } from '@currents/playwright';

export default defineConfig({
  testDir: './playwright-tests',
  reporter: [['list'], currentsReporter()],
  use: {
    baseURL: 'http://localhost:9300',
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:9300',
    reuseExistingServer: !process.env.CI,
  },
});
