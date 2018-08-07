// Udemy - Types
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.anotherComplexObject = {
        name: "Mike",
        data: [4, 5, 6]
    };
    // - Union Types -------------------------------------------------------------------------------------------------------
    exports.myRealAge = 99;
    function showMyRealAge(age) {
        return typeof age == "number" ? `N: ${age}` : `S: ${age}`;
    }
    exports.showMyRealAge = showMyRealAge;
});
//# sourceMappingURL=typedef.js.map