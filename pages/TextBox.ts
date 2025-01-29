import { Page, expect, chromium } from "@playwright/test";

export class TextBox {
  readonly inputFullName = this.page.locator('[placeholder="Full Name"]');
  readonly inputEmail = this.page.locator('[placeholder="name@example.com"]');
  readonly inputCurrentAdress = this.page.locator(
    '[placeholder= "Current Address"]',
  );
  readonly inputPermanentAddress = this.page.locator("#permanentAddress");
  readonly submitButton = this.page.locator("#submit");

  constructor(public readonly page: Page) {
    this.page = page;
  }

  async fillFullName(name: string) {
    await this.inputFullName.fill(name);
  }
  async fillInputEmailField(email: string) {
    await this.inputEmail.fill(email);
  }
  async fillCurrentAddress(address: string) {
    await this.inputCurrentAdress.fill(address);
  }
  async fillPermanentAddress(permanentAddress: string) {
    await this.inputPermanentAddress.fill(permanentAddress);
  }
  async clickOnSubmitButton() {
    await this.submitButton.click();
  }
  async verifyIfFormApppears() {
    await expect(this.page.locator('[placeholder="Full Name"]')).toBeVisible();
  }
}
