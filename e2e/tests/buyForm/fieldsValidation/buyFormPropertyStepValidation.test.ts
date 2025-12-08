import { expect, test } from '../../../common/fixtures/fixtures';
import {USER} from "../../../common/constants/user";

test('Buy Form Property Step Validation', async function ({context, homePage}){

    await test.step('Go to Property Step and check that user can proceed with first selected option', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToPropertyStep(USER.zip);

        await homePage.propertyTypeQuizCard.first().click();
        await homePage.propertyTypeQuizCard.nth(1).click();
        await homePage.propertyTypeQuizCard.last().click();
        await homePage.propertyTypeStepSubmitBtn.click();
        await expect(homePage.propertyTypeStep).not.toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
    });

    await test.step('Go to Property Step and check that user can proceed with second selected option', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToPropertyStep(USER.zip);

        await homePage.propertyTypeQuizCard.first().click();
        await homePage.propertyTypeQuizCard.nth(1).click();
        await homePage.propertyTypeStepSubmitBtn.click();
        await expect(homePage.propertyTypeStep).not.toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
    });

    await test.step('Go to Property Step and check that user can proceed with third selected option', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToPropertyStep(USER.zip);

        await homePage.propertyTypeQuizCard.first().click();
        await homePage.propertyTypeStepSubmitBtn.click();
        await expect(homePage.propertyTypeStep).not.toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
    });

    await test.step('Go to Property Step and check that user cant proceed with no one selected option', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToPropertyStep(USER.zip);

        await homePage.propertyTypeStepSubmitBtn.click();
        await expect(homePage.propertyTypeStepErrorBlock).toBeVisible();
        await expect(homePage.propertyTypeStep).toBeVisible();
        await expect(homePage.userInfoStep).not.toBeVisible();
    });
})