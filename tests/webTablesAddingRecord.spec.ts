import { test, expect } from "@playwright/test";
import { Navigation } from "../pages/Navigation";
import { WebTables } from "pages/WebTables";

test.describe("webTables", () => {
  let navigation: Navigation;
  let webTables: WebTables;

  test.beforeEach(async ({ page }) => {
    navigation = new Navigation(page);
    webTables = new WebTables(page);

    await navigation.openPage();
    await navigation.clickOnTileFirst();
    await navigation.clickOnWebTablesOption();
  });
  test("Fill in the modal form -Positive scenario", async ({ page }) => {
    await webTables.clickOnAddButton();
    await webTables.typeFirstName();
    await webTables.typeLastName();
    await webTables.typeEmail();
    await webTables.typeAge();
    await webTables.typeSalary();
    await webTables.typeDepartment();
    await webTables.clickOnSubmit();
  });
});
