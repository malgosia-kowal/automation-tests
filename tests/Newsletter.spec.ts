import { test, expect, type Page } from '@playwright/test';
import { homePage } from '../pages/homePage';



//Check if user can succesfully sign in to Newsletter 
test('SignInToNewsletter', async ({ page }) => {

  const login = new homePage(page);

    await login.openPage();
    await login.enterUsername();
    await login.enterEmail();
    await login.checkBoxSelect();
    await login.SignInButtonClick();
    await login.checkIfClosed();
});

//Check if user can close Newsletter without signed in 
test('CloseWithoutSignIn', async ({ page }) => {

  const login = new homePage(page);

    await login.openPage();
    await login.clickCloseIcon();
    await login.checkIfClosed();
});

//Check validation message when email is incorrect 
test('CheckEmailValidation', async ({ page }) => {

  const login = new homePage(page);

    await login.openPage();
    await login.enterUsername();
    await login.enterWrongEmail();
    await login.SignInButtonClick();
    await login.checkValidationEmail();
});
  
  

