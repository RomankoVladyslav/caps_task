import { expect, test } from '../../../common/fixtures/fixtures';
import {emails} from "../../../common/constants/email";
import {USER} from "../../../common/constants/user";

let validity;

test('Email And Name Validation', async function ({context, homePage}){

    await test.step('Go to Home Page and proceed buy form to step with email', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToUserInfoStep(USER.zip);
    })

    await test.step('Check Empty Fields Validation', async () => {
        await expect(homePage.userInfoNameErrorBlock).not.toBeVisible();
        await homePage.userInfoNameField.fill('John Smith');
        await homePage.userInfoStepSubmitBtn.click();
        validity = await homePage.userInfoEmailField.evaluate(
            (el: HTMLInputElement) => el.validationMessage
        );
        await expect(validity).not.toBe("");
    })

    for(const email of emails) {
    await test.step(`Check invalid value '${email}' in email field validation`, async () => {
        await homePage.userInfoEmailField.fill(email);
        await homePage.userInfoStepSubmitBtn.click();
        validity = await homePage.userInfoEmailField.evaluate(
            (el: HTMLInputElement) => el.validationMessage
        );
        await expect(validity).not.toBe("");
        await expect(homePage.phoneStep).not.toBeVisible();
    })
    }

    await test.step('Check valid value in email field validation', async () => {
        await homePage.userInfoEmailField.fill('test@gmail.com');
        await homePage.userInfoStepSubmitBtn.click();
        await expect(homePage.userInfoEmailField).not.toBeVisible();
        await expect(homePage.phoneStep).toBeVisible();
    })

})