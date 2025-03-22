import { Page, expect } from "@playwright/test";

export class RadioButtons {
  constructor(public readonly page: Page) {
    this.page = page;
  }
  async clickRadioButton(valueRadioButton: string) {
    await this.page
      .getByRole("radio", { name: valueRadioButton })
      .check({ force: true });
  }
  async verifyIfRadioButtonWasSelected(verifiedText: string) {
    await expect(
      this.page.locator(".text-success", { hasText: verifiedText }),
    ).toBeVisible();
  }
}
