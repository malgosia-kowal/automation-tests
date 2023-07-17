import { Page, expect } from "@playwright/test";


export class ClickPrompt{

    public SelectYes: any;
 
constructor(public page: Page ){

    this.page =page 
    this.SelectYes = this.page.frameLocator('iframe[title="salesmanago-consent-form-title"]').getByRole('button', { name: 'Tak' });
}
 async clickYesOnPrompt(){

    await this.SelectYes.click();
}};