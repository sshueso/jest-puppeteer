const puppeteer = require('puppeteer');

let browser;
let page;

describe('test google home page', () => {

    beforeAll(async() => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('https://google.com');
    })

    it('should find first anchor', async() => {
        const hrefs = await page.evaluate(() => {
            const anchors = document.querySelectorAll('a');
            return [].map.call(anchors, a => a.href);
        });

        expect(hrefs[0]).toBe('https://mail.google.com/mail/?tab=wm')
    })

    afterAll(async() => {
        await browser.close();
    });
})