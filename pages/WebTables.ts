import { Page, expect, chromium } from "@playwright/test";

export class WebTables {
  readonly addButton = this.page.getByRole("button").getByText("Add");
  readonly firstName = this.page.getByPlaceholder("First Name");
  readonly lastName = this.page.getByPlaceholder("Last Name");
  readonly age = this.page.getByPlaceholder("Age");
  readonly salary = this.page.getByPlaceholder("Salary");
  readonly department = this.page.getByPlaceholder("Department");
  readonly buttonSubmit = this.page.getByRole("button", { name: "Submit" });
  readonly email = this.page.getByPlaceholder("name@example.com");
  readonly pencilIconFirstRecord = this.page.getByTitle("Edit").first();
  readonly createdRecord = this.page.locator(".rt-tr-group", {
    hasText: "Margo",
  });

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
  async clickOnPencil() {
    await this.pencilIconFirstRecord.click();
  }
  async verifyIfRecordWasAdded() {
    await expect(this.createdRecord).toBeVisible();
  }
}
