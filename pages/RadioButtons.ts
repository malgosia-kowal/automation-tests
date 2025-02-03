import { Page, expect } from "@playwright/test";

export class RadioButtons {
  readonly radioButton = this.page.getByRole("radio", { name: "yes" });
  readonly radioButtonSecond = this.page.getByRole("radio", {
    name: "Impressive",
  });
  readonly radioButtonThird = this.page.getByRole("radio", { name: "No" });

  constructor(public readonly page: Page) {
    this.page = page;
  }
  async clickRadioButtonYes() {
    await this.radioButton.check({ force: true });
  }
  async verifyIfYesRadioButtonWasSelected() {
    await expect(
      this.page.locator(".text-success", { hasText: "Yes" }),
    ).toBeVisible();
  }
  async clickRadioButtonImpressive() {
    await this.radioButtonSecond.check({ force: true });
  }
  async verifyIfImpressiveRadioButtonWasSelected() {
    await expect(
      this.page.locator(".text-success", { hasText: "Impressive" }),
    ).toBeVisible();
  }
}
