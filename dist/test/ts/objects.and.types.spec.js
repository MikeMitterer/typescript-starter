(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../../main/ts/objects.and.types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("mocha");
    const assert = require("assert");
    const oat = require("../../main/ts/objects.and.types");
    describe("Objects and types", () => {
        it("dynamic object", () => {
            assert.equal(oat.userName.name, "Mike");
        });
        it("type-save-object", () => {
            assert.equal(oat.userData.name, "Gerda");
        });
        it('should return age via callback', function () {
            const person = oat.complexObject;
            assert.equal(person.callback(99), "Age: 99");
        });
        it("Describe your test", () => {
            assert.deepEqual(oat.anotherComplexObject.data, [4, 5, 6]);
        });
        it('should mark the type of function param as N: or S:', function () {
            assert.equal(oat.showMyRealAge(99), "N: 99");
            assert.equal(oat.showMyRealAge("99"), "S: 99");
            assert.equal(oat.myRealAge, "99");
        });
        it('should throw and error', function () {
            assert.throws(() => oat.neverEnds(), Error);
            assert.throws(oat.neverEnds, Error);
        });
        it('should not accept null', function () {
            assert.ok(oat.tryToReturnNull("Mike") != null);
        });
    });
});
//# sourceMappingURL=objects.and.types.spec.js.map