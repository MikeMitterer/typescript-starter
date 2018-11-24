import * as lambi from "@images/lambi.png";
import { Name } from "@main/address/Name";
import { loggerFactory } from "@main/config/ConfigLog4j";
import { giveAge9 } from "@main/main";

export function sayMyName(): string {
    return "Mike";
}

export function addValues(v1: number, v2: number): number {
    return v1 + v2;
}

export function main(): void {
    // Retrieve a logger (you can decide to use it per class and/or module or just
    // export it in the config above etc. Your loggers - your choice!).
    // This logger will fall in the first LogGroupRule from above.
    const logger = loggerFactory.getLogger("model.Product");

    console.log(`index.ts invoked - ${sayMyName()}`);

    (document.querySelector("#tstest") as HTMLElement).onclick = (event: MouseEvent): void => {
        alert(`Hi Mike, event '${event.type}' occurred!!`);
    };

    logger.info(() => `Servus Message!!!... ${giveAge9()}`);

    const divs = Array.from(document.getElementsByTagName("div"));

    divs.forEach((div: HTMLDivElement) => {
        div.addEventListener("click", (evt: MouseEvent) => {
            evt = new MouseEvent("aaa");
            console.log(evt);
        });
    });

    // for(const div of divs) {
    //     div.
    // }

    const name = new Name("Mike", "Mitterer4");

    const appDiv = (document.querySelector("#app") as HTMLDivElement);
    appDiv.textContent = name.fullname;

    const img = document.querySelector("#frontImg") as HTMLImageElement;
    img.src = lambi;

    console.log("Done!!!");
}

if (typeof window !== "undefined") {
    main();
}
