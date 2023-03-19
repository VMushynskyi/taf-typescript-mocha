import BasePage from "./base.page";

class LoginPage extends BasePage {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }

    public getPageTitle() {
        return $("//div[text() = 'Swag Labs']");
    }

    public getAttributeElement(text: string, attribute: string) {
        return $(`//input[@${attribute} = '${text}']`);
    }

    async login(username: string, password: string) {
        await this.usernameInput().setValue(username);
        await this.passwordInput().setValue(password);
        await this.loginButton().click();
    }

    public getLoginCredentials(){
        return $$("//div[@id = 'login_credentials']");
    }

    public getPasswordCredentials(){
        return $$("//div[@class = 'login_password']")
    }

    async openApp() {
        await super.openUrl("https://www.saucedemo.com/");
    }
}

export default new LoginPage();