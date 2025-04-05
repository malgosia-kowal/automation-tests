import { Page, expect } from "@playwright/test";
import * as fs from "fs";

export class DownloadFile {
  readonly downloadButton = this.page.locator("#downloadButton");

  constructor(public readonly page: Page) {
    this.page = page;
  }
  async clickOnDownloadButton() {
    const downloadPromise = this.page.waitForEvent("download");
    await this.downloadButton.click();
    //const filePath = `./downloads/${download.suggestedFilename()}`;

    const download = await downloadPromise;
    const filePath = `./TestData/${download.suggestedFilename()}`;
    const filePaths = download.saveAs(
      "./TestData/" + download.suggestedFilename(),
    );
    await filePaths;
    expect(fs.existsSync(filePath)).toBeTruthy();
  }
}
