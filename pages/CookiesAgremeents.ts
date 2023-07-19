import { test, expect, type Page } from '@playwright/test';


export class CookiesAgremeents{

    public AgreeCookiesButton: any;
    public checkIfCookiesVisible: any;
    public learnMoreCookies: any;
    public checkIfPolicyPageOpen:any;

constructor(public page:Page){

    this.checkIfCookiesVisible = expect(page.getByText('W ramach naszej witryny stosujemy pliki cookies w celu świadczenia Państwu usług'));
    this.learnMoreCookies = this.page.getByRole('link', { name: 'Dowiedz się więcej' });
    this.checkIfPolicyPageOpen = expect(page.getByRole('list').getByRole('link', { name: 'Polityka prywatności' }));
    this.AgreeCookiesButton = this.page.locator('[data-test="cookieConsent\\.agreeButton"]');
}
async acceptCookiesAgreements(){

    await this.AgreeCookiesButton.click();
}
async checkCookiesClosed(){

    await this.checkIfCookiesVisible.toBeHidden();
}
async learnMoreAgreements(){

    await this.learnMoreCookies.click();
}
async checkPolicyPageOpen(){

   await this.checkIfPolicyPageOpen.toHaveCount(1);
}
};