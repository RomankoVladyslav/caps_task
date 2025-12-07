import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class ThankYouPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}