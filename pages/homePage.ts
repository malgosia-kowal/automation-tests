
import { Page, chromium, expect } from "@playwright/test";


 export class homePage{

 
constructor(public page: Page){

    this.page = page;
   
  }
async openPage(){

    const browser = await chromium.launch({ headless: true });
    await this.page.goto('https://demoqa.com/');
   
}};






