export module SmokeTest {

    //noinspection JSUnusedGlobalSymbols
    export function helloWorld6() {
        console.log("Hello World 2");
    }

    export function sayMyName() {
        console.log("Hello Mike");
    }
}

/// Hallo Testsr
export function endsWith(str:string, suffix:string) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

export function giveAge() : number {
    return 99
}

export function returnMyName() : String {
    return "Mike4";
}

export function returnNothing() : void {
}

export function returnGerdasName() : string {
    return "Gerda"
}