class Waits {

    async waitForSeconds(value: number){
        await browser.pause(value * 1000);
    }
}

export default new Waits();