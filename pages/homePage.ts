
import { Page, chromium, expect } from "@playwright/test";



 export class HomePage{

  public clickonPage: any;
  public clickOnTile: any;

 
  constructor(public page: Page){

    this.page = page;
    this.clickOnTile = this.page.locator('svg').first();

   
  }
async openPage(){

    const browser = await chromium.launch({ headless: true });
    await this.page.goto('https://demoqa.com/');
   
}

async clickOnTileFirst(){

  await this.clickOnTile.click();

}
async checkIfLeftMenuIsVisible(){

  
  await expect(this.page.getByText('Elements')).toBeVisible();

}
async clickOnTextBoxMenu(){
  await this.page.locator('#item-0').first().click()
}
async checkIfFormApppears(){
  
  const fullname = await this.page.locator('[placeholder="Full Name"]').isVisible();
}
 async clickOnInputFieldFullName(){
  const inputFullName = this.page.locator(('[placeholder="Full Name"]')).click()
  
  await this.page.locator(('[placeholder="Full Name"]')).fill('Test');
};
   
//async typeTextIntoInputField(){
  //await this.page.locator(('[placeholder="Full Name"]')).fill('Test');
//}
};






