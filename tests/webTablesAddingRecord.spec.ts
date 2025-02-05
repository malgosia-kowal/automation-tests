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
    await webTables.typeFirstName("Margo");
    await webTables.typeLastName("Test");
    await webTables.typeEmail("margo@test.pl");
    await webTables.typeAge("27");
    await webTables.typeSalary(23);
    await webTables.typeDepartment("general");
    await webTables.clickOnSubmit();
    await webTables.verifyIfRecordWasAdded();
  });
  test("Edit record in webTables", async ({ page }) => {
    await webTables.clickOnPencil();
    await webTables.typeFirstName("Maggie");
    await webTables.typeLastName("Tester");
    await webTables.typeEmail("updatedEmail@op.pl");
    await webTables.typeAge("30");
    await webTables.typeSalary(24);
    await webTables.typeDepartment("Edited");
    await webTables.clickOnSubmit();
  });
});
