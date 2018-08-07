(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../../main/ts/main"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("mocha");
    const assert = require("assert");
    const main_1 = require("../../main/ts/main");
    describe("Some main functions", () => {
        it("should say Gerda", () => {
            assert.equal(main_1.returnGerdasName(), "Gerda");
        });
    });
});
//# sourceMappingURL=main.js.map