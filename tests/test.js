let page;

describe('test google home page', () => {

    beforeAll(async() => {
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
})