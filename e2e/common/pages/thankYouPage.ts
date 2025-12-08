import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class ThankYouPage extends BasePage {
    readonly page: Page;

    readonly headerTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.headerTitle = page.locator("[class='heroThankYou__hdr']");
    }
}