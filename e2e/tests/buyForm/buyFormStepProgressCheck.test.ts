import { expect, test } from '../../common/fixtures/fixtures';
import { Urls } from "../../common/constants/url";
import {USER} from "../../common/constants/user";

test('Buy Form Step Progress Check', async function ({context, homePage}){

    await test.step('Go to Home Page', async () => {
        await homePage.gotoHomePage();
        await expect(homePage.buyFormContainer).toBeVisible()
    })

    await test.step('Enter Zip Code and proceed to Interest step', async () => {
        await homePage.enterZipCode(USER.zip);
        await homePage.submitZipCode();
    });

    await test.step('Check Step Progress and proceed to Property step', async () => {
        await expect(homePage.buyFormStepProgressCurrent).toHaveText("2");
        await expect(homePage.buyFormStepProgressTotal).toHaveText("5");
        await homePage.selectInterest(0);
        await homePage.submitInterest();
    });

    await test.step('Check Step Progress and proceed to User Info step', async () => {
        await expect(homePage.buyFormStepProgressCurrent).toHaveText("3");
        await expect(homePage.buyFormStepProgressTotal).toHaveText("5");
        await homePage.selectPropertyType(1);
        await homePage.submitPropertyType();
    });

    await test.step('Check Step Progress and proceed to Phone Number step', async () => {
        await expect(homePage.buyFormStepProgressCurrent).toHaveText("4");
        await expect(homePage.buyFormStepProgressTotal).toHaveText("5");
        await homePage.enterUserInfo(USER.name, USER.email);
        await homePage.submitUserInfo();
    });

    await test.step('Check Step Progress on Phone Number step', async () => {
        await expect(homePage.buyFormStepProgressCurrent).toHaveText("5");
        await expect(homePage.buyFormStepProgressTotal).toHaveText("5");
    });

})