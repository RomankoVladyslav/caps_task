import { expect, test } from '../../../common/fixtures/fixtures';
import { Urls } from "../../../common/constants/url";
import {USER} from "../../../common/constants/user";

test('Phone field validation', async function ({context, homePage}){

    await test.step('Go to Home Page and proceed buy form to step with phone', async () => {
        await homePage.gotoHomePage();
        await homePage.proceedToPhoneStep(USER.zip, USER.name, USER.email);
    })

    await test.step('Should allow only digits (letters and symbols should be blocked)', async () => {
        await homePage.phoneStepPhoneField.fill('abc!@#123');

        const value = await homePage.phoneStepPhoneField.inputValue();
        expect(value).toBe('(123) ___-____');
    });

    await test.step('Should not allow entering more than 10 digits', async () => {
        await homePage.phoneStepPhoneField.fill('434343434343434343');

        const value = await homePage.phoneStepPhoneField.inputValue();
        expect(value).toBe('(434)343-4343');
    });

    await test.step('Should show validation error if less than 10 digits entered', async () => {
        await homePage.phoneStepPhoneField.fill('12345');
        await homePage.phoneStepSubmitBtn.click();

        await expect(homePage.phoneStepErrorBlock).toHaveText('Wrong phone number.');
    });

    await test.step('Should accept valid 10-digit number', async () => {
        await homePage.phoneStepPhoneField.fill('4343434343');
        await homePage.phoneStepSubmitBtn.click();

        await expect(homePage.phoneStepErrorBlock).toBeHidden();

        await expect(homePage.page).toHaveURL(Urls.ThankYouPage);
    });


})