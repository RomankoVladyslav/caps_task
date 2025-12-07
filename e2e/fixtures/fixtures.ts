import { test as base } from '@playwright/test';
import {
    HomePage,
    ThankYouPage
} from '../pages/';

type Fixtures = {
    homePage: HomePage;
    thankYouPage: ThankYouPage;
}

export const test = base.extend<Fixtures>({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    thankYouPage: async ({page}, use) => {
        const thankYouPage = new ThankYouPage(page);
        await use(thankYouPage);
    },
})

export {expect} from '@playwright/test'