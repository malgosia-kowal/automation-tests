import { Page, chromium } from "@playwright/test"


export class Navigation{

    readonly page: Page;
    readonly clickOnTile: any;
    readonly clickOnTextBoxMenu: any;
    readonly clickOnCheckBoxMenu: any;


    constructor (page: Page){
        this.page = page;
        this.clickOnTile = this.page.locator('svg').first();
        this.clickOnTextBoxMenu = this.page.locator("#item-0").first().click();
        this.clickOnCheckBoxMenu = this.page.locator(':text-is("Check Box")')
      


    }
    async openPage() {
        const browser = await chromium.launch({ headless: true });
        await this.page.goto("https://demoqa.com/");
      }
    async clickOnTileFirst() {
        await this.clickOnTile.click();
      }
    
    async clickOnTextBoxOption() {
        await this.clickOnTextBoxMenu
      }
    async clickOnCheckBoxOption() {
        await this.clickOnCheckBoxMenu.click();
      }
}
