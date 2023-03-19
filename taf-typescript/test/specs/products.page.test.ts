import loginPage from "../../pages/login.page";
import productsPage from "../../pages/products.page";
import productsData from "../../data/products.list";
import waits from "../../utils/waits";
import cartPage from "../../pages/cart.page";

describe('Check Product page', () => {

    beforeEach(async () => {
        await loginPage.openApp();
        await waits.waitForSeconds(1);
        await loginPage.login("standard_user", "secret_sauce");
    });

    it('Verify that user opened a Products page', async () => {
        expect(await productsPage.isProductsPageTitleDisplayed()).toEqual(true);
    });

    it('Verify that all six products exists on the page', async () => {

        const text = await productsPage.getAllProducts().map(element => element.getText());

        productsData.listOfProducts.map(element => {
            if (!text.includes(element)) {
                return false;
            }
            return true;
        }).forEach(res => {
            expect(res).toEqual(true);
        });
    })

    it('Verify that product can be added to the card', async () => {
        productsPage.addProductToTheCart("Sauce Labs Backpack");

        expect(await productsPage.getShopingCarIconNuber()).toEqual("1");

        productsPage.clickByCartIcon();

        expect(await cartPage.getCartItemByName("Sauce Labs Backpack").isDisplayed()).toEqual(true);
        expect(await cartPage.getCartItemQuantityByName("Sauce Labs Backpack")).toEqual("1");
    })
});