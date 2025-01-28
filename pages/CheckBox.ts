import { Page } from "@playwright/test";

export class CheckBox{

public page: Page;
public CheckBox: any;

constructor(page:Page){

    this.page = page;
    this.CheckBox = this.page.locator('svg.rct-icon.rct-icon-uncheck').click();
    
}
async selectCheckBox(){

   await this.CheckBox
}


}