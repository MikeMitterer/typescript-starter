import lambi from '../site/images/lambi.png';
import { loggerFactory } from './config/ConfigLog4j';

// Zum testen des exportes in ../index.ts
export function sayMyName(): string {
    return 'Mike';
}

// Zum testen des exportes in ../index.ts
export function addValues(v1: number, v2: number): number {
    return v1 + v2;
}

const query = (selector: string): HTMLElement => document.querySelector(selector) as HTMLElement;

// class Name2 {
//     public readonly name: string = 'abc';
// }

// const NameE = new NameEvent('Mike42');

function main(): void {
    // Retrieve a logger (you can decide to use it per class and/or module or just
    // export it in the config above etc. Your loggers - your choice!).
    // This logger will fall in the first LogGroupRule from above.
    const logger = loggerFactory.getLogger('main');

    logger.info(`index.ts invoked - ${sayMyName()}`);

    query('#tstest').onclick = (event: MouseEvent): void => {
        alert(`Hi Mike, event '${event.type}' occurred!!`);
    };

    const divs = Array.from(document.getElementsByTagName('div'));

    divs.forEach((div: HTMLDivElement) => {
        div.addEventListener('click', (evt: MouseEvent) => {
            evt = new MouseEvent('aaa');
            logger.info(JSON.stringify(evt));
        });
    });

    // MyEvents1.sayHello.on((value: string) => alert(`MyEvents: ${value}`));

    logger.debug(`Lambi: ${JSON.stringify(lambi)}`);
    const img = document.querySelector('#frontImg') as HTMLImageElement;
    img.src = lambi;

    query('#app').textContent = "Loaded!";
    const body = query('body') as HTMLBodyElement;
    body.classList.remove('loading');
    body.classList.add('loaded');

    // logger.info(`Done!!!! ${os.platform()}`);
    logger.info(`Done!!!!`);
}

if (typeof window !== 'undefined') {
    main();
}

function everythingIsReady() {
    const logger = loggerFactory.getLogger('done');
    logger.info(`everythingIsReady!`);
}

function domIsReady() {
    const logger = loggerFactory.getLogger('done');
    logger.info(`domIsReady!`);
}

// function unknownState(state: string) {
//     const logger = loggerFactory.getLogger("state");
//     logger.info(`unknownState: ${state}!`);
// }

// Mehr: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
const domIsReadyState = setInterval(() => {
    if (/interactive/.test(document.readyState)) {
        clearInterval(domIsReadyState);
        domIsReady(); // this is the function that gets called when everything is loaded
    }
}, 10);

const everythingLoadedState = setInterval(() => {
    if (/loaded|complete/.test(document.readyState)) {
        clearInterval(everythingLoadedState);
        everythingIsReady(); // this is the function that gets called when everything is loaded
    }
}, 10);

// document.addEventListener('readystatechange', () => {
//     if (/interactive/.test(document.readyState)) {
//         domIsReady();
//     } else if (/loaded|complete/.test(document.readyState)) {
//         everythingIsReady();
//     } else {
//         unknownState(document.readyState);
//     }
// });
