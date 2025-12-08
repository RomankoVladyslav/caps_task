import { expect, test } from '../../../common/fixtures/fixtures';
import {USER} from "../../../common/constants/user";

test('Buy Form Interested Step Validation', async function ({context, homePage}){

    await test.step('Go to Interested Step and check that user can proceed with all selected options', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToInterestStep(USER.zip);

        await homePage.whyInterestedStepQuizCard.first().click();
        await homePage.whyInterestedStepQuizCard.nth(1).click();
        await homePage.whyInterestedStepQuizCard.nth(2).click();
        await homePage.whyInterestedStepQuizCard.last().click();
        await homePage.whyInterestedStepSubmitBtn.click();
        await expect(homePage.whyInterestedStep).not.toBeVisible();
        await expect(homePage.propertyTypeStep).toBeVisible();
    });

    await test.step('Go to Interested Step and check that user can proceed with 3 selected options', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToInterestStep(USER.zip);

        await homePage.whyInterestedStepQuizCard.first().click();
        await homePage.whyInterestedStepQuizCard.nth(1).click();
        await homePage.whyInterestedStepQuizCard.nth(2).click();
        await homePage.whyInterestedStepSubmitBtn.click();
        await expect(homePage.whyInterestedStep).not.toBeVisible();
        await expect(homePage.propertyTypeStep).toBeVisible();
    });

    await test.step('Go to Interested Step and check that user can proceed with 2 selected options', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToInterestStep(USER.zip);

        await homePage.whyInterestedStepQuizCard.first().click();
        await homePage.whyInterestedStepQuizCard.nth(1).click();
        await homePage.whyInterestedStepSubmitBtn.click();
        await expect(homePage.whyInterestedStep).not.toBeVisible();
        await expect(homePage.propertyTypeStep).toBeVisible();
    });

    await test.step('Go to Interested Step and check that user can proceed with 1 selected option', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToInterestStep(USER.zip);

        await homePage.whyInterestedStepQuizCard.first().click();
        await homePage.whyInterestedStepSubmitBtn.click();
        await expect(homePage.whyInterestedStep).not.toBeVisible();
        await expect(homePage.propertyTypeStep).toBeVisible();
    });

    await test.step('Go to Interested Step and check that user cant proceed with no one selected option', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToInterestStep(USER.zip);

        await homePage.whyInterestedStepSubmitBtn.click();
        await expect(homePage.whyInterestedStepErrorBlock).toBeVisible();
        await expect(homePage.whyInterestedStep).toBeVisible();
        await expect(homePage.propertyTypeStep).not.toBeVisible();
    });
})