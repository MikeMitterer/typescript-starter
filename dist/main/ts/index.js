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
    var SmokeTest;
    (function (SmokeTest) {
        //noinspection JSUnusedGlobalSymbols
        function helloWorld6() {
            console.log("Hello World 2");
        }
        SmokeTest.helloWorld6 = helloWorld6;
        function sayMyName() {
            console.log("Hello Mike");
        }
        SmokeTest.sayMyName = sayMyName;
    })(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
});
//# sourceMappingURL=index.js.map