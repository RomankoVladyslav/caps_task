import { expect, test } from '../../../common/fixtures/fixtures';
import {USER} from "../../../common/constants/user";

test('Buy Form Name field validation', async function ({context, homePage}){

    await test.step('Go to Home Page and proceed buy form to step with name', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToUserInfoStep(USER.zip);
        await homePage.userInfoEmailField.fill('test@gmail.com');
    })

    await test.step('Empty field should show required error', async () => {
        await homePage.userInfoNameField.fill('');
        await homePage.userInfoStepSubmitBtn.click();

        await expect(homePage.userInfoNameErrorBlock).toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
        await expect(homePage.phoneStep).not.toBeVisible();
    });

    await test.step('Name shorter than 3 characters should show error', async () => {
        await homePage.userInfoNameField.fill('Jo');
        await homePage.userInfoStepSubmitBtn.click();

        await expect(homePage.userInfoNameErrorBlock).toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
        await expect(homePage.phoneStep).not.toBeVisible();
    });

    await test.step('Only name without surname should show error', async () => {
        await homePage.userInfoNameField.fill('John');
        await homePage.userInfoStepSubmitBtn.click();

        await expect(homePage.userInfoNameErrorBlock).toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
        await expect(homePage.phoneStep).not.toBeVisible();
    });

    await test.step('Name with digits should show error', async () => {
        await homePage.userInfoNameField.fill('John123 Doe');
        await homePage.userInfoStepSubmitBtn.click();

        await expect(homePage.userInfoNameErrorBlock).toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
        await expect(homePage.phoneStep).not.toBeVisible();
    });

    await test.step('Name with special characters should show error', async () => {
        await homePage.userInfoNameField.fill('John @Doe');
        await homePage.userInfoStepSubmitBtn.click();

        await expect(homePage.userInfoNameErrorBlock).toBeVisible();
        await expect(homePage.userInfoStep).toBeVisible();
        await expect(homePage.phoneStep).not.toBeVisible();
    });

    await test.step('Valid name and surname should not show error', async () => {
        await homePage.userInfoNameField.fill('John Doe');
        await homePage.userInfoStepSubmitBtn.click();

        await expect(homePage.userInfoNameErrorBlock).not.toBeVisible();
        await expect(homePage.userInfoStep).not.toBeVisible();
        await expect(homePage.phoneStep).toBeVisible();
    });
})