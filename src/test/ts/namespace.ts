import { MyMath } from "../../main/ts/math/MyMath";

namespace MyName {
    export namespace OtherName {
        export function sayMyName() : string { return "Mike"; }
    }
}

describe("Test Namespaces", () => {
    test("Basics", () => {
        expect(MyName.OtherName.sayMyName()).toBe("Mike1");
    });

    test("Import aus MyMath", () => {
        expect(MyMath.calcSomething(2,2)).toBe(4 );
    });
});
