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

    (document.querySelector("#tstest") as HTMLElement).onclick = (event: MouseEvent): void => {
        alert(`Hi Mike, event '${event.type}' occurred!!`);
    };
}

if (typeof window !== "undefined") {
    main();
}
