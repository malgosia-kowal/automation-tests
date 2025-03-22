import { Page, expect } from "@playwright/test";

export class CheckBox {
  readonly checkBox = this.page.locator("svg.rct-icon.rct-icon-uncheck");
  readonly checkBoxesExpand = this.page.getByLabel("Toggle");

  constructor(public readonly page: Page) {
    this.page = page;
  }

  async expandCheckBox() {
    await this.checkBoxesExpand.click();
  }
  async selectCheckBox() {
    await this.checkBox.click();
  }
}
