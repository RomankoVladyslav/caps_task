import { expect, test } from '../../../common/fixtures/fixtures';
import { Urls } from "../../../common/constants/url";
import {USER} from "../../../common/constants/user";

test('Success order check', async function ({context, homePage, thankYouPage}){

    await test.step('Go to Home Page', async () => {
        await homePage.gotoHomePage();
        await expect(homePage.buyFormContainer).toBeVisible()
    })

    await test.step('Enter Zip Code and proceed to next step', async () => {
        await homePage.enterZipCode(USER.zip);
        await homePage.submitZipCode();
    });

    await test.step('Select Interest option and proceed to next step', async () => {
        await homePage.selectInterest(0);
        await homePage.submitInterest();
    });

    await test.step('Select Property option and proceed to next step', async () => {
        await homePage.selectPropertyType(1);
        await homePage.submitPropertyType();
    });

    await test.step('Enter Email and Name and proceed to next step', async () => {
        await homePage.enterUserInfo(USER.name, USER.email);
        await homePage.submitUserInfo();
    });

    await test.step('Enter Phone number and complete order', async () => {
        await homePage.enterPhoneNumber(USER.phone);
        await homePage.submitPhoneNumber();
    });

    await test.step('Check that user is redirected to TY page and order is completed', async () => {
        await expect(thankYouPage.page).toHaveURL(Urls.ThankYouPage);
        await expect(thankYouPage.headerTitle).toHaveText("Thank you!")
    });
})