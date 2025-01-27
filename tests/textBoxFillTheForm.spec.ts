import { test, expect } from '@playwright/test';

import { TextBox } from 'pages/TextBox';
import { Navigation } from 'pages/Navigation';



test.beforeEach(async ({ page }) => {
  const element = new Navigation(page);
  const element1 = new TextBox(page);

   await element.openPage();
   await element.clickOnTileFirst();
   //await element.checkIfLeftMenuIsVisible();
   await element.clickOnTextBoxMenu();
   await element1.checkIfFormApppears();
})

test('Fill in Input FullName', async ({ page }) => {
 
  const element = new TextBox(page);
 
   await element.clickOnInputFieldFullName();

})
test('Fill in Email', async ({ page }) => {
 
  const element1 = new Navigation(page);
  const element = new TextBox(page);
   
   // await element1.clickOnTileFirst();
   // await element.checkIfLeftMenuIsVisible();
    //await element1.clickOnTextBoxMenu();
    //await element.checkIfFormApppears();
    await element.clickOnEmailInputField();
})
