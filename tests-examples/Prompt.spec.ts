import { test, expect, type Page } from '@playwright/test';

import { homePage } from 'pages/homePage';

//Check if after clicking on "Yes" option prompt is not visible 
test('ClickOnPromptYes', async({page}) =>{

  
  const element = new homePage(page);

    await element.openPage();

});