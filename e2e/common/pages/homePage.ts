import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { Urls } from "../constants/url";

export class HomePage extends BasePage {
    readonly page: Page;

    //hero Section
    readonly heroContainer: Locator;
    readonly heroTitle: Locator;
    readonly heroSubtitle: Locator;

    readonly heroVideoSection: Locator;
    readonly heroVideoPauseBtn: Locator;
    readonly heroVideoPlayBtn: Locator;

    readonly heroListBlock: Locator;
    readonly heroListBlockItem: Locator;

    //Stats Show Bathroom Section
    readonly statsShowContainer: Locator;
    readonly statsShowImage: Locator;
    readonly statsShowTitle: Locator;
    readonly statsShowSubtitle: Locator;
    readonly statsShowQuote: Locator;

    //Safe Bathing System
    readonly safeBathingSystemContainer: Locator;
    readonly safeBathingSystemTitle: Locator;

    readonly safeBathingSystemVideoSection: Locator;
    readonly safeBathingSystemVideoPauseBtn: Locator;
    readonly safeBathingSystemVideoPlayBtn: Locator;

    //Health Benefits Container
    readonly healthBenefitsContainer: Locator;
    readonly healthBenefitsTitle: Locator;
    readonly healthBenefitsSubtitle: Locator;

    readonly healthBenefitsImage: Locator;

    readonly healthBenefitsHealthItem: Locator;
    readonly healthBenefitsHealthItemTitle: Locator;
    readonly healthBenefitsHealthItemSubtitle: Locator;
    readonly healthBenefitsHealthItemImage: Locator;

    //Built To Last Container
    readonly builtToLastContainer: Locator;
    readonly builtToLastTitle: Locator;

    readonly builtToLastMainImageContainer: Locator;
    readonly builtToLastMainImageCurrentImg: Locator;
    readonly builtToLastMainImagePrevBtn: Locator;
    readonly builtToLastMainImageNextBtn: Locator;

    readonly builtToLastSliderSection: Locator;
    readonly builtToLastSliderItem: Locator;
    readonly builtToLastSliderItemCurrent: Locator;

    //Buy Form Container
    readonly buyFormContainer: Locator;
    readonly buyFormTitle: Locator;
    readonly buyFormStepProgressCurrent: Locator;
    readonly buyFormStepProgressTotal: Locator;

    readonly buyFormZipCodeStep: Locator;
    readonly buyFormZipCodeStepTitle: Locator;
    readonly buyFormZipCodeStepField: Locator;
    readonly buyFormZipCodeStepSubmitBtn: Locator;
    readonly buyFormZipCodeStepErrorBlock: Locator;

    readonly whyInterestedStep: Locator;
    readonly whyInterestedStepTitle: Locator;
    readonly whyInterestedStepQuizCard: Locator;
    readonly whyInterestedStepSubmitBtn: Locator;
    readonly whyInterestedStepErrorBlock: Locator;

    readonly propertyTypeStep: Locator;
    readonly propertyTypeTitle: Locator;
    readonly propertyTypeQuizCard: Locator;
    readonly propertyTypeStepSubmitBtn: Locator;
    readonly propertyTypeStepErrorBlock: Locator;

    readonly userInfoStep: Locator;
    readonly userInfoTitle: Locator;
    readonly userInfoNameField: Locator;
    readonly userInfoEmailField: Locator;
    readonly userInfoNameErrorBlock: Locator;
    readonly userInfoStepSubmitBtn: Locator;

    readonly phoneStep: Locator;
    readonly phoneStepTitle: Locator;
    readonly phoneStepPhoneField: Locator;
    readonly phoneStepErrorBlock: Locator;
    readonly phoneStepImage: Locator;
    readonly phoneStepSubmitBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        //hero Section
        this.heroContainer = page.locator("[class='hero']");
        this.heroTitle = this.heroContainer.locator("[class*='blockTitle__hdr']");
        this.heroSubtitle = this.heroContainer.locator("[class*='blockTitle__txt']");

        this.heroVideoSection = this.heroContainer.locator("[class*='blockVideo']").first();
        this.heroVideoPauseBtn = this.heroVideoSection.locator("[class*='lavin-pause']");
        this.heroVideoPlayBtn = this.heroVideoSection.locator("[class*='lavin-play']");

        this.heroListBlock = this.heroContainer.locator("ul");
        this.heroListBlockItem = this.heroListBlock.locator("li");

        //Stats Show Bathroom Section
        this.statsShowContainer = page.locator("[class='section section_pb-md pt-1 pt-sm-3']");
        this.statsShowImage = this.statsShowContainer.locator("[class='falling__img ']");
        this.statsShowTitle = this.statsShowContainer.locator("[class*='blockTitle__hdr']");
        this.statsShowSubtitle = this.statsShowContainer.locator("[class*='blockTitle__txt']");
        this.statsShowQuote = this.statsShowContainer.locator("quote__content");

        //Safe Bathing System
        this.safeBathingSystemContainer = page.locator("[class='section section_pb-md background-lightBlue mt-md-4']");
        this.safeBathingSystemTitle = this.safeBathingSystemContainer.locator("[class*='blockTitle__txt']");

        this.safeBathingSystemVideoSection = this.safeBathingSystemContainer.locator("[class*='blockVideo']").first();
        this.safeBathingSystemVideoPauseBtn = this.safeBathingSystemContainer.locator("[class*='lavin-pause']");
        this.safeBathingSystemVideoPlayBtn = this.safeBathingSystemContainer.locator("[class*='lavin-play']");

        //Health Benefits Container
        this.healthBenefitsContainer = page.locator("[class='section']").first();
        this.healthBenefitsTitle = this.healthBenefitsContainer.locator("[class*='blockTitle__hdr']");
        this.healthBenefitsSubtitle = this.healthBenefitsContainer.locator("[class*='blockTitle__txt']");

        this.healthBenefitsImage = this.healthBenefitsContainer.locator("[class*='blockCompare__img']").first();

        this.healthBenefitsHealthItem = this.healthBenefitsContainer.locator("[class*='healthBlock__content']");
        this.healthBenefitsHealthItemTitle = this.healthBenefitsHealthItem.locator("[class*='healthBlock__hdr']");
        this.healthBenefitsHealthItemSubtitle = this.healthBenefitsHealthItem.locator("[class*='healthBlock__txt']");
        this.healthBenefitsHealthItemImage = this.healthBenefitsContainer.locator("img[class*='healthBlock__icon']");

        //Built To Last Container
        this.builtToLastContainer = page.locator("[class='section background-lightBlue']").first();
        this.builtToLastTitle = this.builtToLastContainer.locator("[class*='blockTitle__hdr']");

        this.builtToLastMainImageContainer = this.builtToLastContainer.locator("[class*='sliderDefault__slider']");
        this.builtToLastMainImageCurrentImg = this.builtToLastMainImageContainer.locator("[class*='slick-current']");
        this.builtToLastMainImagePrevBtn = this.builtToLastMainImageContainer.locator("[class*='slick-prev']");
        this.builtToLastMainImageNextBtn = this.builtToLastMainImageContainer.locator("[class*='slick-next']");

        this.builtToLastSliderSection = this.builtToLastContainer.locator("[class*='sliderPrev__slider']");
        this.builtToLastSliderItem = this.builtToLastSliderSection.locator("[class*='sliderPrev__item']");
        this.builtToLastSliderItemCurrent = this.builtToLastSliderSection.locator("[class*='slick-current']");

        //Buy Form Container
        this.buyFormContainer = page.locator("[class='section_form']").first();
        this.buyFormTitle = this.buyFormContainer.locator("[class*='blockTitle__hdr']");
        this.buyFormStepProgressCurrent = this.buyFormContainer.locator("[class*='stepProgress__stepCurrent']");
        this.buyFormStepProgressTotal = this.buyFormContainer.locator("[class*='stepProgress__total']");

        this.buyFormZipCodeStep = this.buyFormContainer.locator("[name='zip_code']");
        this.buyFormZipCodeStepTitle = this.buyFormZipCodeStep.locator("[class='stepTitle__hdr']");
        this.buyFormZipCodeStepField = this.buyFormZipCodeStep.locator("input[name='zipCode']");
        this.buyFormZipCodeStepSubmitBtn = this.buyFormZipCodeStep.locator("button[type='submit']");
        this.buyFormZipCodeStepErrorBlock = this.buyFormZipCodeStep.locator("[class='helpBlock']");

        this.whyInterestedStep = this.buyFormContainer.locator("[class='steps step-2']");
        this.whyInterestedStepTitle = this.whyInterestedStep.locator("[class='stepTitle__hdr']");
        this.whyInterestedStepQuizCard = this.whyInterestedStep.locator("[class*='quizCard_size-full']");
        this.whyInterestedStepSubmitBtn = this.whyInterestedStep.locator("button[type='submit']");
        this.whyInterestedStepErrorBlock = this.whyInterestedStep.locator("[class='helpBlock']");

        this.propertyTypeStep = this.buyFormContainer.locator("[class='steps step-3']");
        this.propertyTypeTitle = this.propertyTypeStep.locator("[class='stepTitle__hdr']");
        this.propertyTypeQuizCard = this.propertyTypeStep.locator("[class*='quizCard_size-full']");
        this.propertyTypeStepSubmitBtn = this.propertyTypeStep.locator("button[type='submit']");
        this.propertyTypeStepErrorBlock = this.propertyTypeStep.locator("[class*='helpBlock']");

        this.userInfoStep = this.buyFormContainer.locator("[class='steps step-4']");
        this.userInfoTitle = this.userInfoStep.locator("[class='stepTitle__hdr']");
        this.userInfoNameField = this.userInfoStep.locator("input[name='name']");
        this.userInfoEmailField = this.userInfoStep.locator("input[type='email']");
        this.userInfoNameErrorBlock = this.userInfoStep.locator("[class='helpBlock']").first();
        this.userInfoStepSubmitBtn = this.userInfoStep.locator("button[type='submit']");

        this.phoneStep = this.buyFormContainer.locator("[class='steps step-5']");
        this.phoneStepTitle = this.phoneStep.locator("[class='stepTitle__hdr']");
        this.phoneStepPhoneField = this.phoneStep.locator("input[name='phone']");
        this.phoneStepErrorBlock = this.phoneStep.locator("[class='helpBlock']");
        this.phoneStepImage = this.phoneStep.locator("[class='formSide__img']");
        this.phoneStepSubmitBtn = this.phoneStep.locator("button[type='submit']");
    }

    async gotoHomePage() {
        await this.page.goto(Urls.HomePage);
        await expect(this.heroContainer).toBeVisible();
    }

    async enterZipCode(zip: string) {
        await this.buyFormZipCodeStepField.fill(zip);
    }

    async submitZipCode() {
        await this.buyFormZipCodeStepSubmitBtn.click();
    }

    async selectInterest(index = 0) {
        await this.whyInterestedStepQuizCard.nth(index).click();
    }

    async submitInterest() {
        await this.whyInterestedStepSubmitBtn.click();
    }

    async selectPropertyType(index = 0) {
        await this.propertyTypeQuizCard.nth(index).click();
    }

    async submitPropertyType() {
        await this.propertyTypeStepSubmitBtn.click();
    }

    async enterUserInfo(name: string, email: string) {
        await this.userInfoNameField.fill(name);
        await this.userInfoEmailField.fill(email);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneStepPhoneField.fill(phoneNumber);
    }

    async submitUserInfo() {
        await this.userInfoStepSubmitBtn.click();
    }

    async submitPhoneNumber() {
        await this.phoneStepSubmitBtn.click();
    }

    async expectInterestStep() {
        await expect(this.whyInterestedStep).toBeVisible();
    }

    async expectPropertyStep() {
        await expect(this.propertyTypeStep).toBeVisible();
    }

    async expectEmailStep() {
        await expect(this.userInfoEmailField).toBeVisible();
    }

    async expectPhoneStep() {
        await expect(this.phoneStepPhoneField).toBeVisible();
    }

    async proceedToInterestStep(zip: string) {
        await this.enterZipCode(zip);
        await this.submitZipCode();
        await this.expectInterestStep();
    }

    async proceedToPropertyStep(zip: string, interestIndex = 0) {
        await this.proceedToInterestStep(zip);
        await this.selectInterest(interestIndex);
        await this.submitInterest();
        await this.expectPropertyStep();
    }

    async proceedToUserInfoStep(zip: string, interestIndex = 0, propertyIndex = 0) {
        await this.proceedToPropertyStep(zip, interestIndex);
        await this.selectPropertyType(propertyIndex);
        await this.submitPropertyType();
        await this.expectEmailStep();
    }

    async proceedToPhoneStep(zip: string, name: string, email: string) {
        await this.proceedToUserInfoStep(zip);
        await this.enterUserInfo(name, email);
        await this.submitUserInfo();
        await this.expectPhoneStep();
    }

    async validateHeroSection() {
        await expect(this.heroContainer).toBeVisible();
        await expect(this.heroTitle).toBeVisible();
        await expect(this.heroSubtitle).toBeVisible();

        await expect(this.heroVideoSection).toBeVisible();

        await expect(this.heroListBlock).toBeVisible();
        const items = await this.heroListBlockItem.count();
        expect(items).toBeGreaterThan(0);
    }

    async validateStatsShowSection() {
        await expect(this.statsShowContainer).toBeVisible();
        await expect(this.statsShowImage).toBeVisible();
        await expect(this.statsShowTitle).toBeVisible();
        await expect(this.statsShowSubtitle).toBeVisible();
    }

    async validateSafeBathingSystemSection() {
        await expect(this.safeBathingSystemContainer).toBeVisible();
        await expect(this.safeBathingSystemTitle).toBeVisible();

        await expect(this.safeBathingSystemVideoSection).toBeVisible();
    }

    async validateHealthBenefitsSection() {
        await expect(this.healthBenefitsContainer).toBeVisible();
        await expect(this.healthBenefitsTitle).toBeVisible();
        await expect(this.healthBenefitsSubtitle).toBeVisible();

        await expect(this.healthBenefitsImage).toBeVisible();

        const count = await this.healthBenefitsHealthItem.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            await expect(this.healthBenefitsHealthItemTitle.nth(i)).toBeVisible();
            await expect(this.healthBenefitsHealthItemSubtitle.nth(i)).toBeVisible();
            await expect(this.healthBenefitsHealthItemImage.nth(i)).toBeVisible();
        }
    }

    async validateBuiltToLastSection() {
        await expect(this.builtToLastContainer).toBeVisible();
        await expect(this.builtToLastTitle).toBeVisible();

        await expect(this.builtToLastMainImageContainer).toBeVisible();
        await expect(this.builtToLastMainImageCurrentImg).toBeVisible();

        await expect(this.builtToLastMainImagePrevBtn).toBeVisible();
        await expect(this.builtToLastMainImageNextBtn).toBeVisible();

        await expect(this.builtToLastSliderSection).toBeVisible();
        const items = await this.builtToLastSliderItem.count();
        expect(items).toBeGreaterThan(1);
        await expect(this.builtToLastSliderItemCurrent).toBeVisible();
    }

    async validateBuyFormSection() {
        await expect(this.buyFormContainer).toBeVisible();
        await expect(this.buyFormTitle).toBeVisible();
    }
}