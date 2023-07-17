import { test, expect, type Page } from '@playwright/test';
import { CookiesAgremeents } from 'pages/CookiesAgremeents';
import { Newsletter_SignIn } from 'pages/Newsletter_SignIn';


//Check if after cookies acceptation window dissapearing 
test('cookiesAcceptation', async({page})=>{

  const element =  new CookiesAgremeents(page);
  const open = new Newsletter_SignIn(page); 

    await open.openPage();
    await element.acceptCookiesAgreements();
    await element.checkCookiesClosed();
})