import { test, expect } from "@playwright/test";
import { Navigation } from "../pages/Navigation";
import { TextBox } from "pages/TextBox";

test.describe("textBoxSuite", () => {
  let navigation: Navigation;
  let textBox: TextBox;

  test.beforeEach(async ({ page }) => {
    navigation = new Navigation(page);
    textBox = new TextBox(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnTextBoxOption();
  });

  test("Fill in the form", async ({ page }) => {
    await navigation.clickOnTextBoxOption();
    await textBox.verifyIfFormApppears();
    await textBox.fillFullName("Test");
    await textBox.fillInputEmailField("Gosia@op.pl");
    await textBox.fillCurrentAddress("street");
    await textBox.fillPermanentAddress("StreetPermanent");
    await textBox.clickOnSubmitButton();
  });
});
