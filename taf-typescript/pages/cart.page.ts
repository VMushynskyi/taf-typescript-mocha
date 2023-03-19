import BasePage from "./base.page";

class CartPage extends BasePage {

    public getCartItems() {
        return $("//div[@class = 'cart_item']");
    }

    public getCartItemName(epxctedName: string) {
        return $(`//div[@class = 'inventory_item_name' and text() = '${epxctedName}']`);
    }

    public getCartItemByName(cartProductName: string) {
        return this.getCartItems()
            .$(`//div[@class = 'inventory_item_name' and text() = '${cartProductName}']`);
    }

    public getCartItemQuantityByName(cartProduct: string) {
        return this.getCartItems()
            .$(`//div[@class = 'inventory_item_name' and text() = '${cartProduct}']/preceding::div[@class = 'cart_quantity'][1]`).getText();
    }
}

export default new CartPage();