import { Page, expect, chromium } from "@playwright/test";

export class WebTables {
  readonly addButton = this.page.locator("#addNewRecordButton");
  readonly firstName = this.page.locator("#firstName");
  readonly lastName = this.page.locator("#lastName");
  readonly age = this.page.locator("#age");
  readonly salary = this.page.locator("#salary");
  readonly department = this.page.locator("#department");
  readonly buttonSubmit = this.page.locator("#submit");
  readonly email = this.page.locator("#userEmail");
  readonly createdRecord = this.page.locator(".rt-td").nth(21);
  readonly editedRecord = this.page.locator(".rt-td").nth(0);
  //readonly recordInTable = this.page.locator(".rt-tr-group", {hasText: "Alden",});
  readonly modal = this.page.locator("#userForm");
  readonly closeIcon = this.page.locator(".sr-only");
  readonly searchField = this.page.locator("#searchBox");
  readonly deleteRecord = this.page.locator("#delete-record-2");
  readonly tableRows = this.page.locator(".rt-tr-group");

  constructor(public readonly page: Page) {
    this.page = page;
  }
  async clickOnAddButton() {
    await this.addButton.click();
  }
  async typeFirstName(firstName: string) {
    await this.firstName.fill(firstName);
  }
  async typeLastName(lastName: string) {
    await this.lastName.fill(lastName);
  }
  async typeEmail(email: string) {
    await this.email.fill(email);
  }
  async typeAge(ages: string) {
    await this.age.fill(ages);
  }
  async typeSalary(salary: number) {
    await this.salary.fill(salary.toString());
  }
  async typeDepartment(department: string) {
    await this.department.fill(department);
  }
  async clickOnSubmit() {
    await this.buttonSubmit.click();
  }
  async clickOnPencilIcon(recordId: string) {
    await this.page.locator(recordId).click();
  }
  async verifyRecord(name: string) {
    await expect(this.createdRecord).toHaveText(name);
  }
  async verifyEditedRecord(name: string) {
    await expect(this.editedRecord).toHaveText(name);
  }
  async verifyIfFormIsVisible() {
    await expect(this.modal).toBeVisible();
  }
  async verifyIfFormIsNotVisible() {
    await expect(this.modal).toBeHidden();
  }
  async clickOnCloseIcon() {
    await this.closeIcon.click();
  }
  async typeRecordToSearch(recordName: string) {
    const recordsBeforeSearch = await this.getTotalRows();
    await this.searchField.fill(recordName);
    const recordsAfterSearch = await this.getTotalRows();
    expect(recordsAfterSearch).toBeLessThan(recordsBeforeSearch);
  }
  async verifyIfSearchedRecordIsVisible(recordName: string) {
    await expect(
      this.page.locator(".rt-tr-group", { hasText: recordName }),
    ).toBeVisible();
  }
  async deleteRecordById(id: string) {
    const sum = await this.getTotalRows();

    await this.page.locator(id).click();
    const after = await this.getTotalRows();
    await expect(after).toBeLessThan(sum);
  }
  async verifyIfRecordwasDeleted(id: string) {
    await expect(this.page.locator(id)).toBeHidden();
  }
  public async getTotalRows(): Promise<number> {
    const rows = await this.tableRows.allInnerTexts();
    console.log("Raw rows:", rows);
    const notEmptyRows = rows.filter((row) => row.trim() !== "");
    return notEmptyRows.length;
  }
}
