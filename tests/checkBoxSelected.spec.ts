import { Navigation } from "../pages/Navigation";
import { test, expect } from "@playwright/test";
import { CheckBox } from "../pages/CheckBox";

test.describe("checkBox", () => {
  let navigation: Navigation;
  let checkBox: CheckBox;

  test.beforeEach(async ({ page }) => {
    checkBox = new CheckBox(page);
    navigation = new Navigation(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnCheckBoxOption();
  });

  test("Expand Home CheckBox", async () => {
    await checkBox.expandCheckBox();
  });
  test("Select Home CheckBox", async () => {
    await checkBox.selectCheckBox();
  });
});
