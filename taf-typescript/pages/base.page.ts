export default class BasePage {

    protected async openUrl(path: string){
        await browser.url(path);
    }
}