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
    function myCallback() {
        return "Mike6";
    }
    exports.myCallback = myCallback;
    /**
     * Die Kombi ?: macht den Parameter optional
     *
     * @param name
     * @param age
     */
    function functionWithOptionalParams(name, age) {
        return `Hi ${name}, your age is ${age ? age : "<undefined>"}`;
    }
    exports.functionWithOptionalParams = functionWithOptionalParams;
    function functionWithDefaultParams(firstname, lastname = "Mitterer") {
        return `Hi ${firstname} ${lastname}`;
    }
    exports.functionWithDefaultParams = functionWithDefaultParams;
});
//# sourceMappingURL=functions.js.map