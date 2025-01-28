import { Page, chromium, expect } from "@playwright/test";

export class TextBox {
  public clickonPage: any;
  public page: Page;
  public clickOnTile: any;
  public inputFullName: any;
  public inputEmail: any;
  public inputCurrentAdress: any;
  public inputPermanentAdress: any;
  public submitButton: any;

  constructor(page: Page) {
    this.page = page;
    this.inputFullName = this.page.locator('[placeholder="Full Name"]');
    this.inputEmail = this.page.locator('[placeholder="name@example.com"]');
    this.inputCurrentAdress = this.page.locator('[placeholder= "Current Address"]');
    this.inputPermanentAdress = this.page.locator('#permanentAddress');
    this.submitButton = this.page.locator('#submit');
  }

  async clickOnInputFieldFullName() {
    await this.inputFullName.click();
    await this.inputFullName.fill("Test");
  }
  async clickOnEmailInputField() {
    await this.inputEmail.click();
    await this.inputEmail.fill('Gosia');
  }
  async clickOnCurrentAdress() {
    await this.inputCurrentAdress.click();
    await this.inputCurrentAdress.fill('Test with current Adress');
  }
  async clickOnPermanentAdress() {
    await this.inputPermanentAdress.click();
    await this.inputPermanentAdress.fill('Test with Permanent Adress');
  }
  async clickOnSubmitButton() {
    await this.submitButton.click();
  }
  async checkIfFormApppears() {
    const fullname = await this.page.locator('[placeholder="Full Name"]').isVisible();
  }
}
