import * as pptr from 'puppeteer';


(async () => {
    const browser = await pptr.launch({
        headless: false,
        userDataDir: './'
    });
    const page = await browser.newPage();

    console.log('Chromium launched!')
})()
