import * as lambi from "../../site/images/lambi.png";
import { Name } from "./address/Name";
import { loggerFactory } from "./config/ConfigLog4j";
import { giveAge9 } from "./main";

export function sayMyName(): string {
    return "Mike";
}

/**
 * Zählt zweit Werte zusammen
 *
 *     import * as lambi from "../../site/images/lambi.png";
 *     ...
 *     const img = document.querySelector("#frontImg") as HTMLImageElement;
 *     img.src = lambi;
 *
 * @param v1 Wert 1
 * @param v2 Wert 2
 */
export function addValues(v1: number, v2: number): number {
    return v1 + v2;
}

export function multiplyValue(v1: number, v2: number): number {
    return v1 * v2;
}

function main(): void {
    // Retrieve a logger (you can decide to use it per class and/or module or just
    // export it in the config above etc. Your loggers - your choice!).
    // This logger will fall in the first LogGroupRule from above.
    const logger = loggerFactory.getLogger("main");

    logger.info(`index.ts invoked - ${sayMyName()}`);

    (document.querySelector("#tstest") as HTMLElement).onclick = (event: MouseEvent): void => {
        alert(`Hi Mike, event '${event.type}' occurred!!`);
    };

    logger.info(() => `Servus Message!!!!... ${giveAge9()}`);

    const divs = Array.from(document.getElementsByTagName("div"));

    divs.forEach((div: HTMLDivElement) => {
        div.addEventListener("click", (evt: MouseEvent) => {
            evt = new MouseEvent("aaa");
            logger.info(JSON.stringify(evt));
        });
    });

    // for(const div of divs) {
    //     div.
    // }

    const name = new Name("Mike", "Mitterer5");

    const appDiv = (document.querySelector("#app") as HTMLDivElement);
    appDiv.textContent = name.fullname;

    logger.debug(`Lambi: ${JSON.stringify(lambi)}`);
    const img = document.querySelector("#frontImg") as HTMLImageElement;
    img.src = lambi;

    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.remove("loading");
    body.classList.add("loaded");

    // logger.info(`Done!!!! ${os.platform()}`);
    logger.info(`Done!!!!`);
}

if (typeof window !== "undefined") {
    main();
}

function everythingIsReady() {
    const logger = loggerFactory.getLogger("done");
    logger.info(`everythingIsReady!`);
}

function domIsReady() {
    const logger = loggerFactory.getLogger("done");
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
