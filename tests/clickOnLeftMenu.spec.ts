import { test, expect } from '@playwright/test';

import { homePage } from 'pages/homePage';


//Go to DemoQA website 
test('OpenDemoQA page', async({page}) =>{

  
  const element = new homePage(page);

    await element.openPage();
    await element.clickOnTileFirst();
    await element.checkIfLeftMenuIsVisible();
});

