import { Page, chromium } from "@playwright/test";

export class Navigation {
  readonly tile = this.page.locator("svg").first();
  readonly textBoxMenu = this.page.getByRole("list").getByText("Text Box");
  readonly checkBoxMenu = this.page.locator(':text-is("Check Box")');
  readonly radioButton = this.page.locator(':text-is("Radio Button")');
  readonly webTables = this.page.locator(".text", { hasText: "Web Tables" });

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
  async clickOnRadioButtonOption() {
    await this.radioButton.click();
  }
  async clickOnWebTablesOption() {
    await this.webTables.click();
  }
}
