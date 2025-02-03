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

  constructor(public readonly page: Page) {
    this.page = page;
  }
  async clickOnAddButton() {
    await this.addButton.click();
  }
  async typeFirstName() {
    await this.firstName.fill("Maggie");
  }
  async typeLastName() {
    await this.lastName.fill("Test");
  }
  async typeEmail() {
    await this.email.fill("Test@op.pl");
  }
  async typeAge() {
    await this.age.fill("12");
  }
  async typeSalary() {
    await this.salary.fill("12");
  }
  async typeDepartment() {
    await this.department.fill("testDepartment");
  }
  async clickOnSubmit() {
    await this.buttonSubmit.click();
  }
}
