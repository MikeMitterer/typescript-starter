import puppeteer, { Browser, Page } from 'puppeteer';

/**
 * Install:
 *      yarn add --dev jest-puppeteer
 *      yarn add --dev puppeteer
 *
 * Damit der "Compile-Prozess" vor dem Aufruf des Browsers angestoßen wird
 * muss jest wie folgt gestartet werden:
 *       export INTEGRATION_TEST='true' && jest src/test/integration/browser/reminder.puppeteer.specs.ts
 *
 * Mehr:
 *      https://dev.to/aalises/dealing-with-asynchrony-when-writing-end-to-end-tests-with-puppeteer--jest-n37
 */
describe('reminder.ts', () => {
    // const logger = loggerFactory.getLogger('test.reminder.ts');

    let page: Page;
    let browser: Browser;
    const width = 1920;
    const height = 1080;

    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            // slowMo: 100,
            // args: [`--window-size=${width},${height}`],
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
        await page.setViewport({ width, height });
        // await jestPuppeteer.debug();
    });

    afterEach(async () => {
        await page.close();
        await browser.close();
    });

    test('Test in Browser', async () => {
        await expect(await page.title()).toStartWith('Title');
        // await page.setContent(
        //     `
        //         <h1>Test</h1>
        //     `,
        // );
        // await jestPuppeteer.debug();
    }, 100000);
});
