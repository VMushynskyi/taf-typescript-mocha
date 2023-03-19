import BasePage from "./base.page";

class Products extends BasePage {

    public isProductsPageTitleDisplayed() {
        return $("//*[@class = 'title' and text() = 'Products']").isDisplayed();
    }

    public getAllProducts(){
        return $$("//div[@class = 'inventory_item_name']");
    }

    public addProductToTheCart(productName: string){
        console.log("---------Log result---------");
        console.log(`//div[@class = 'inventory_item_name' and text() = '${productName}']/ancestor::div[2]//button[text() = 'Add to cart']`);
        $(`//div[@class = 'inventory_item_name' and text() = '${productName}']/ancestor::div[2]//button[text() = 'Add to cart']`).click();
    }

    public getShopingCarIconNuber(){
        return $("//span[@class = 'shopping_cart_badge']").getText();
    }

    public clickByCartIcon(){
        $("//div[@id = 'shopping_cart_container']/a").click();
    }
}

export default new Products();