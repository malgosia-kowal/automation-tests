import { Page, expect } from "@playwright/test";
import path from "path";

export class Upload {
  readonly uploadFileButton = this.page.locator("#uploadFile");
  readonly fileName = this.page.locator("#uploadedFilePath");

  constructor(public readonly page: Page) {
    this.page = page;
  }
  async uploadFile() {
    const fileChooserPromise = this.page.waitForEvent("filechooser");
    await this.uploadFileButton.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join("./TestData/test.pdf"));
    //await fileChooser.setFiles(path.join(__dirname, 'testData/test.pdf'));
  }
  async verifyIfFileIsVisible() {
    await expect(this.fileName).toBeVisible();
  }
}
