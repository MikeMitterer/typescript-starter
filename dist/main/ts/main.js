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
    /// Hallo Testsr
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    exports.endsWith = endsWith;
    function giveAge() {
        return 99;
    }
    exports.giveAge = giveAge;
    function returnMyName() {
        return "Mike4";
    }
    exports.returnMyName = returnMyName;
    function returnNothing() {
    }
    exports.returnNothing = returnNothing;
    function returnGerdasName() {
        return "Gerda";
    }
    exports.returnGerdasName = returnGerdasName;
});
//# sourceMappingURL=main.js.map