//noinspection JSUnusedGlobalSymbols
import "../../web/assets/styles/main.scss";

export function helloWorld6() {
    console.log("Hello World 2");
}

export function sayMyName(): string {
    return "Hello Mike";
}

export function main(): void {
    console.log(`index.ts invoked - ${sayMyName()}`);

    (document.querySelector("#tstest") as HTMLElement).onclick = (): void => {
        alert("Hi Mike!");
    };
}

if (typeof window !== "undefined") {
    main();
}
