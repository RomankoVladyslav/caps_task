import { test } from '../../common/fixtures/fixtures';

test('Home Page Overview', async function ({context, homePage, thankYouPage}){

    await test.step('Go to Home Page and validate sections', async () => {
        await homePage.gotoHomePage();

        await homePage.validateHeroSection();
        await homePage.validateStatsShowSection();
        await homePage.validateSafeBathingSystemSection();
        await homePage.validateHealthBenefitsSection();
        await homePage.validateBuiltToLastSection();
        await homePage.validateBuyFormSection();
    })
})