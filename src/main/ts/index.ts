//noinspection JSUnusedGlobalSymbols
// import { cat } from "images/cat.png";
// import * as cat from "@images/static/cat.jpg";
import * as lambi from "@images/lambi.png";
import { Name } from "@main/address/Name";

export function sayMyName(): string {
    return "Mike5";
}

export function addValues(v1: number, v2: number): number {
    return v1 + v2;
}

export function main(): void {
    console.log(`index.ts invoked - ${sayMyName()}`);

    (document.querySelector("#tstest") as HTMLElement).onclick = (event: MouseEvent): void => {
        alert(`Hi Mike, event '${event.type}' occurred!!`);
    };

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

    console.log("Done!!");
}

if (typeof window !== "undefined") {
    main();
}
