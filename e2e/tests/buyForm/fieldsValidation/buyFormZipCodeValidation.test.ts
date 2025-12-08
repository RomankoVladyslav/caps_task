import { expect, test } from '../../../common/fixtures/fixtures';

let errorMessage: string;
test('Zip Code Validation', async function ({context, homePage}){

    await test.step('Go to Home Page and check empty field validation', async () => {
        await homePage.gotoHomePage();

        await expect(homePage.buyFormZipCodeStepErrorBlock).not.toBeVisible();
        await homePage.buyFormZipCodeStepSubmitBtn.click();
        await expect(homePage.buyFormZipCodeStepErrorBlock).toBeVisible();
        errorMessage = await homePage.buyFormZipCodeStepErrorBlock.innerText();
        await expect(errorMessage).toBe('Enter your ZIP code.');
        await expect(homePage.whyInterestedStep).not.toBeVisible();
    })

    await test.step('Check 4 digit zip code validation', async () => {
        await homePage.enterZipCode('1234');
        await homePage.buyFormZipCodeStepSubmitBtn.click();
        await expect(homePage.buyFormZipCodeStepErrorBlock).toBeVisible();
        errorMessage = await homePage.buyFormZipCodeStepErrorBlock.innerText();
        await expect(errorMessage).toBe('Wrong ZIP code.');
        await expect(homePage.whyInterestedStep).not.toBeVisible();
    })

    await test.step('Check 6 digit zip code validation', async () => {
        await homePage.enterZipCode('123456');
        await homePage.buyFormZipCodeStepSubmitBtn.click();
        await expect(homePage.buyFormZipCodeStepErrorBlock).toBeVisible();
        errorMessage = await homePage.buyFormZipCodeStepErrorBlock.innerText();
        await expect(errorMessage).toBe('Wrong ZIP code.');
        await expect(homePage.whyInterestedStep).not.toBeVisible();
    })

    await test.step('Check letters zip code validation', async () => {
        await homePage.enterZipCode('lorem');
        await homePage.buyFormZipCodeStepSubmitBtn.click();
        await expect(homePage.buyFormZipCodeStepErrorBlock).toBeVisible();
        errorMessage = await homePage.buyFormZipCodeStepErrorBlock.innerText();
        await expect(errorMessage).toBe('Wrong ZIP code.');
        await expect(homePage.whyInterestedStep).not.toBeVisible();
    })

    await test.step('Check valid zip code validation', async () => {
        await homePage.enterZipCode('32323');
        await homePage.buyFormZipCodeStepSubmitBtn.click();
        await expect(homePage.buyFormZipCodeStepErrorBlock).not.toBeVisible();
        await expect(homePage.whyInterestedStep).toBeVisible();
    })
})