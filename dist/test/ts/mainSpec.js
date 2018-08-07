(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "assert", "../../main/ts/main"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const assert = require("assert");
    const main_1 = require("../../main/ts/main");
    describe('main', function () {
        describe('#endsWith()', function () {
            it('should return true when the value ends with the suffix', function () {
                assert.equal(true, main_1.endsWith("abcd", "bcd"));
            });
            it('should return false when the value does not end with the suffix', function () {
                assert.equal(false, main_1.endsWith("abcd", "cde"));
            });
        });
    });
});
//# sourceMappingURL=mainSpec.js.map