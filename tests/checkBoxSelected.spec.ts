import { Navigation } from "pages/Navigation";
import { test, expect } from "@playwright/test";
import { CheckBox } from "pages/CheckBox";

test.beforeEach(async ({page}) =>{

const element = new Navigation(page);

await element.openPage();
await element.clickOnTileFirst();
await element.clickOnCheckBoxOption();


//await element2.selectCheckBox();

})
test("Select Home CheckBox", async ({ page }) => {
    const element = new CheckBox(page);
  
    await element.selectCheckBox();
  
  });