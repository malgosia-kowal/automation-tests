import { Navigation } from "../pages/Navigation";
import { test, expect } from "@playwright/test";
import { RadioButtons } from "../pages/RadioButtons";

test.describe("SelectingRadioButtons", () => {
  let navigation: Navigation;
  let radioButtons: RadioButtons;

  test.beforeEach(async ({ page }) => {
    navigation = new Navigation(page);
    radioButtons = new RadioButtons(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnRadioButtonOption();
  });

  const radioOptions: string[] = ["Yes", "Impressive"];

  for (const radioOption of radioOptions) {
    test(`clickRadioButton ${radioOption}`, async () => {
      await radioButtons.clickRadioButton(radioOption);
      await radioButtons.verifyIfRadioButtonWasSelected(radioOption);
    });
  }
});
