import { test, expect, type Page } from '@playwright/test';


export class CookiesAgremeents{

    public AgreeCookiesButton: any;
    public checkIfCookiesVisible :any;

constructor(public page:Page){

    this.AgreeCookiesButton = this.page.locator('[data-test="cookieConsent\\.agreeButton"]');
    this.checkIfCookiesVisible = expect(page.getByText('W ramach naszej witryny stosujemy pliki cookies w celu świadczenia Państwu usług'));
}
async acceptCookiesAgreements(){

    await this.AgreeCookiesButton.click();
}
async checkCookiesClosed()
{
    await this.checkIfCookiesVisible.toBeHidden();
}};