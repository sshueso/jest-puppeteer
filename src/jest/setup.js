const puppeteer = require('puppeteer')

beforeAll(async() => {
    global.browser = await puppeteer.launch({
        dumpio: true
    })
})

afterAll(() => {
    browser && browser.close()
})