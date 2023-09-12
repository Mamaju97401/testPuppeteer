const { resolve } = require('path');
const puppeteer = require ('puppeteer');

function wait (ms) {
    return new Promise (resolve => setTimeout(resolve,ms));
} 

(async () => {
    //open navigator
    const browser = await puppeteer.launch({
         headless:'false',
        // `headless: true` (default) enables old Headless;
        // `headless: 'new'` enables new Headless;
        // `headless: false` enables “headful” mode.
        // from to https://developer.chrome.com/articles/new-headless/
        ignoreDefaultArgs: ['--disable-extensions'],
        args: ['--enable-gpu'],
    });
    //open new page
    await wait(4000)

    const page = await browser.newPage();

    await wait(4000)

    //go to the page
    await page.goto ('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal');

    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    await wait(4000)
    //take a screenshot of the page
    await page.screenshot({path:'Git1.jpeg'});

    await wait(4000)
    
    //close the page
    await browser.close();
}) ();
