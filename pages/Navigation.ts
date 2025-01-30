import { Page, chromium } from "@playwright/test";

export class Navigation {
  readonly tile = this.page.locator("svg").first();
  readonly textBoxMenu = this.page.getByRole("list").getByText("Text Box");
  readonly checkBoxMenu = this.page.locator(':text-is("Check Box")');

  constructor(public readonly page: Page) {
    this.page = page;
  }
  async openPage() {
    const browser = await chromium.launch({ headless: true });
    await this.page.goto("https://demoqa.com/");
  }
  async clickOnTileFirst() {
    await this.tile.click();
  }

  async clickOnTextBoxOption() {
    await this.textBoxMenu.click();
  }
  async clickOnCheckBoxOption() {
    await this.checkBoxMenu.click();
  }
}
