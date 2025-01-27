import { Page, chromium } from "@playwright/test"


export class Navigation{

    readonly page: Page;
    readonly clickOnTile: any;

    constructor (page: Page){
        this.page = page;
        this.clickOnTile = this.page.locator('svg').first();

    }
    async openPage() {
        const browser = await chromium.launch({ headless: true });
        await this.page.goto("https://demoqa.com/");
      }
    async clickOnTileFirst() {
        await this.clickOnTile.click();
      }
     // async checkIfLeftMenuIsVisible() {
        //await expect(this.page.getByText("Elements")).;
      //}
      async clickOnTextBoxMenu() {
        await this.page.locator("#item-0").first().click();
      }
}
