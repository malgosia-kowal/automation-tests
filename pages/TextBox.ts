import { Page, expect, chromium } from "@playwright/test";

export class TextBox {
  readonly fullNameInput = this.page.locator('[placeholder="Full Name"]');
  readonly emailInput = this.page.locator('[placeholder="name@example.com"]');
  readonly currentAddressInput = this.page.locator('[placeholder= "Current Address"]',);
  readonly permanentAddressInput = this.page.locator("#permanentAddress");
  readonly submitButton = this.page.locator("#submit");

  constructor(public readonly page: Page) {
    this.page = page;
  }

  async fillFullName(name: string) {
    await this.fullNameInput.fill(name);
  }
  async fillInputEmailField(email: string) {
    await this.emailInput.fill(email);
  }
  async fillCurrentAddress(address: string) {
    await this.currentAddressInput.fill(address);
  }
  async fillPermanentAddress(permanentAddress: string) {
    await this.permanentAddressInput.fill(permanentAddress);
  }
  async clickOnSubmitButton() {
    await this.submitButton.click();
  }
  async verifyIfFormApppears() {
    await expect(this.page.locator('[placeholder="Full Name"]')).toBeVisible();
  }
}
