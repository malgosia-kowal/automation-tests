import { test, expect, type Page } from '@playwright/test';

import {homePage} from 'pages/homePage';


//Check if after cookies acceptation window dissapearing 
test('cookiesAcceptation', async({page})=>{

  //const element =  new CookiesAgremeents(page);
  const element = new homePage(page); 

    await element.openPage();
    await element.acceptCookiesAgreements();
    await element.checkCookiesClosed();
})
//Clicking on learmore and checking redirection
test('cookiesLearnMore', async({page})=>{

  //const element =  new CookiesAgremeents(page);
  const element = new homePage(page); 
  
    await element.openPage();
    await element.learnMoreAgreements();
    await element.checkPolicyPageOpen();
})