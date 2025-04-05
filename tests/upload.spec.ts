import { Navigation } from "pages/Navigation";
import { test } from "@playwright/test";
import { Upload } from "pages/Upload";

test.describe("upload", () => {
  let navigation: Navigation;
  let upload: Upload;

  test.beforeEach(async ({ page }) => {
    navigation = new Navigation(page);
    upload = new Upload(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnDownloadUploadOption();
  });

  test("uploadFile", async ({ page }) => {
    await upload.uploadFile();
    await upload.verifyIfFileIsVisible();
  });
});
