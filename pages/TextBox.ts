import { Page, chromium, expect } from "@playwright/test";

export class TextBox {
  public clickonPage: any;
  public clickOnTile: any;
  public inputFullName: any;
  public inputEmail: any;

  constructor(public page: Page) {
    this.inputFullName = this.page.locator('[placeholder="Full Name"]');
    this.inputEmail = this.page.locator('[placeholder="name@example.com"]');
  }

  async clickOnInputFieldFullName() {
    await this.inputFullName.click();
    await this.inputFullName.fill("Test");
  }
  async clickOnEmailInputField() {
    await this.inputEmail.click();
    await this.inputEmail.fill("Gosia");
  }
  async checkIfFormApppears() {
    const fullname = await this.page.locator('[placeholder="Full Name"]').isVisible();
  }
}
