  import { Page } from '@playwright/test';

    export class HomePage {
        constructor(public page: Page) {}

        readonly dashboardTitle = this.page.locator('h1:has-text("Dashboard")');

        async verifyDashboardTitle() {
            await this.dashboardTitle.isVisible();
        }
    }