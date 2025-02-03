import { Navigation } from "pages/Navigation";
import { test, expect } from "@playwright/test";
import { RadioButtons } from "pages/RadioButtons";

test.describe("SelectingRadioButtons", () => {

 let navigation: Navigation;
 let radioButtons: RadioButtons;

test.beforeEach(async ({page})=> {
    navigation = new Navigation(page);                 
    radioButtons = new RadioButtons(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnRadioButtonOption();

});
test("clickRadioButtonYes", async () =>{
 
    await radioButtons.clickRadioButtonYes();
    await radioButtons.verifyIfYesRadioButtonWasSelected();

})
test("clickRadioButtonImpressive", async () =>{
 
    await radioButtons.clickRadioButtonImpressive();
    await radioButtons.verifyIfImpressiveRadioButtonWasSelected();

});

});