
import { Page, chromium, expect } from "@playwright/test";



 export class homePage{

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
};






