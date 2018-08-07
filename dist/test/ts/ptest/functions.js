(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../../../main/ts/ptest/functions", "../../../main/ts/main"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("mocha");
    const assert = require("assert");
    const functions_1 = require("../../../main/ts/ptest/functions");
    const main_1 = require("../../../main/ts/main");
    describe("functions", () => {
        it("test simple function", function () {
            assert.equal(main_1.returnMyName(), "Mike4");
        });
        it("function as param", function () {
            // Prototype definition
            let callback;
            callback = functions_1.myCallback;
            assert.equal(callback(), "Mike6");
        });
        it('should check age as optional param', function () {
            assert.equal(functions_1.functionWithOptionalParams("Mike", 51), "Hi Mike, your age is 51");
            assert.equal(functions_1.functionWithOptionalParams("Mike"), "Hi Mike, your age is <undefined>");
        });
        it('should return Mike Mitterer', function () {
            assert.equal(functions_1.functionWithDefaultParams("Mike"), "Hi Mike Mitterer");
            assert.equal(functions_1.functionWithDefaultParams("Gerda", "Riedmann"), "Hi Gerda Riedmann");
        });
    });
});
//# sourceMappingURL=functions.js.map