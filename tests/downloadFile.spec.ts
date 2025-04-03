import { Navigation } from "../pages/Navigation";
import { test } from "@playwright/test";
import { DownloadFile } from "pages/DownloadFile";

test.describe("download", () => {
  let download: DownloadFile;
  let navigation: Navigation;

  test.beforeEach(async ({ page }) => {
    download = new DownloadFile(page);
    navigation = new Navigation(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnDownloadUploadOption();
  });

  test("download", async () => {
    await download.clickOnDownloadButton();
  });
});
