import * as pptr from 'puppeteer';
import {createBookmarkFile} from "./bookmarks/utils";


(async () => {

    // @TODO fetch('https://github.com/push-based/web-performance-tools/blob/master/check-lazy-img/check-lazy-img.js');
    createBookmarkFile({
        bookmarkBar: [
            {
                name: '1111',
                script: `alert('1111111');`
            },
            {
                name: '22222',
                script: `alert('222222');`
            },
            {
                name: '333333',
                script: `alert('33333');`
            }
        ],
        outPath: 'user-data/Default/Bookmarks'
    });

    const browser = await pptr.launch({
        headless: false,
        userDataDir: './user-data'
    });
    const page = await browser.newPage();

    console.log('Chromium launched!')
})()
