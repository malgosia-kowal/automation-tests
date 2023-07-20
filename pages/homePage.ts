
import { Page, expect } from "@playwright/test";

 export class homePage{

    public username_field: any;
    public email_field: any;
    public username = "JOHN";
    public email = "malgorzata.bru@vp.pl"
    public wrongEmail = "coś"
    public login_button_Newslater;
    public check_box: any;
    public checkIfNewsletterIsVisible:any;
    public checkValidationMessage:any;
    public closeNewsletter:any;
    public SelectYes: any;
    public AgreeCookiesButton: any;
    public checkIfCookiesVisible: any;
    public learnMoreCookies: any;
    public checkIfPolicyPageOpen:any;
    
   

constructor(public page: Page){

    this.page = page;
    this.username_field= this.page.frameLocator('iframe >> nth=1').getByPlaceholder('Jan Kowalski');
    this.email_field = this.page.frameLocator('#bhr-items iframe >> nth=1').getByPlaceholder('email.address@example.com');
    this.login_button_Newslater = this.page.frameLocator('#bhr-items iframe >> nth=1').getByRole('button', { name: 'Zapisz się!' });
    this.check_box = this.page.frameLocator('#bhr-items iframe >> nth=1').locator('label').filter({ hasText: 'Kobieta' }).locator('div');
    this.checkIfNewsletterIsVisible = expect(page.frameLocator('#bhr-items iframe >> nth=1').getByText('Otrzymaj 20 zł zniżki na zakupy! Zapisz się do newslettera Jestem Slow.'));
    this.checkValidationMessage = expect(page.frameLocator('#bhr-items iframe >> nth=1').getByText('Enter a valid email address.'));
    this.closeNewsletter = this.page.frameLocator('#bhr-items iframe >> nth=1').locator('.bhr-group__close').first();
    this.SelectYes = this.page.frameLocator('iframe[title="salesmanago-consent-form-title"]').getByRole('button', { name: 'Tak' });
    this.checkIfCookiesVisible = expect(page.getByText('W ramach naszej witryny stosujemy pliki cookies w celu świadczenia Państwu usług'));
    this.learnMoreCookies = this.page.getByRole('link', { name: 'Dowiedz się więcej' });
    this.checkIfPolicyPageOpen = expect(page.getByRole('list').getByRole('link', { name: 'Polityka prywatności' }));
    this.AgreeCookiesButton = this.page.locator('[data-test="cookieConsent\\.agreeButton"]');
  
}
async openPage(){

    await this.page.goto('https://jestemslow.pl');
   
}
async enterUsername(){
    
    await this.username_field.click();
    await this.username_field.fill(this.username);
 }
async enterEmail(){

    await this.email_field.click();
    await this.email_field.fill(this.email);
}
async checkBoxSelect() {

   await this.check_box.click();
}
async SignInButtonClick(){

    await this.login_button_Newslater.click();
}
async checkIfClosed (){

    await this.checkIfNewsletterIsVisible.toHaveCount(0);
}
async enterWrongEmail(){

    await this.email_field.click();
    await this.email_field.fill(this.wrongEmail);
}
async checkValidationEmail(){

    await this.checkValidationMessage.toBeVisible();
}
async clickCloseIcon(){

    await this.closeNewsletter.click();
}
async clickYesOnPrompt(){

    await this.SelectYes.click();
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
