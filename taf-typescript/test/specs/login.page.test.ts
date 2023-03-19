import loginPage from "../../pages/login.page";
import waits from "../../utils/waits";

describe('Check Login Page Test', () => {

    beforeEach(async () => {
        await loginPage.openApp();
        await waits.waitForSeconds(1);
    });

    describe('Check displayed text on the Login Page', () => {

        it('Verify displayed title text on the page', async () => {
            const loginInputElement = await loginPage.getAttributeElement("Username", "Placeholder");
            const passwordInputElelemnt = await loginPage.getAttributeElement("Password", "Placeholder");
            const pageTitle = await loginPage.getPageTitle();
            const buttonElement = await loginPage.getAttributeElement("Login", "value");

            expect(await loginInputElement.isDisplayed()).toEqual(true);
            expect(await loginInputElement.getAttribute("Placeholder")).toEqual("Username");
            expect(await passwordInputElelemnt.isDisplayed()).toEqual(true);
            expect(await passwordInputElelemnt.getAttribute("Placeholder")).toEqual("Password");
            expect(await pageTitle.isDisplayed()).toEqual(true);
            expect(await pageTitle.getText()).toEqual("Swag Labs");
            expect(await buttonElement.getAttribute("value")).toEqual("Login");
        });
    });

});