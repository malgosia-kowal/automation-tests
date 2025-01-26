import { test, expect } from '@playwright/test';

import { HomePage } from 'pages/homePage';


//

test('Open DemoQA page', async ({ page }) => {
    const element = new HomePage(page);

    await element.openPage();
    await element.clickOnTileFirst();
    await element.checkIfLeftMenuIsVisible();
    await element.clickOnTextBoxMenu();
    await element.checkIfFormApppears();
    await element.clickOnInputFieldFullName();
});
