import { test, expect, type Page } from '@playwright/test';
import { ClickPrompt } from '../pages/ClickPrompt';
import { Newsletter_SignIn } from 'pages/Newsletter_SignIn';

//Check if after clicking on "Yes" option prompt is not visible 
test('ClickOnPromptYes', async({page}) =>{

  const clickPrompt = new ClickPrompt(page);
  const openPage = new Newsletter_SignIn(page);

    await openPage.openPage();
    await page.pause();
    await clickPrompt.clickYesOnPrompt();
});