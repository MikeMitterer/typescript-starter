(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../../main/ts"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("mocha");
    const assert = require("assert");
    const ts_1 = require("../../main/ts");
    describe("index", () => {
        it("should say 'hello world'", () => {
            ts_1.SmokeTest.helloWorld6();
            assert.ok(true);
            ts_1.SmokeTest.sayMyName();
            // assert.equal(giveAge(), 98)
        });
        it("Number should be 28", function () {
            let numberToTest = "28";
            assert.ok(String(28) === numberToTest, `Number was not 28 but was ${numberToTest}`);
            let myName = "Mike";
            assert.equal(myName, "Mike");
        });
        it("Array", function () {
            let hobbies = [1, 2, 3];
            assert.equal(hobbies.length, 3);
            let names1 = ["Mike", 2];
            assert.equal(names1.length, 2);
        });
        it("Tuples", function () {
            let address = ['Mike', 99];
            assert.equal(address.length, 2);
        });
        it("enum", function () {
            let Color;
            (function (Color) {
                Color[Color["RED"] = 0] = "RED";
                Color[Color["GREEN"] = 1] = "GREEN";
                Color[Color["BLUE"] = 5] = "BLUE";
            })(Color || (Color = {}));
            //assert.equal(Color.)
            let color = Color.GREEN;
            assert.equal(color, 1);
            assert.equal(Color.BLUE, 5);
        });
        it("The car should have 4 wheels", function () {
            let car = { brand: "Audi", wheels: 4 };
            assert.equal(car.wheels, 4, `Number of wheels should be 4 but was ${car.wheels}`);
        });
    });
});
//# sourceMappingURL=index.js.map