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
    let name = "Mike";
    exports.userName = {
        name: name,
        age: 99
    };
    /**
     * Type-Safe definition eines Objects
     *
     * Das Objekt hat zwei parameter: name + age
     */
    exports.userData = {
        name: "Gerda",
        age: 99
    };
    /**
     * Das komplexe Object hat eine Callback als zweiten parameter
     */
    exports.complexObject = {
        name: "Mike",
        callback: function (age) {
            return `Age: ${age}`;
        }
    };
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
    // - never Type --------------------------------------------------------------------------------------------------------
    /**
     * Die Funktion endet nie - deshalb der return type: never
     */
    function neverEnds() {
        throw new Error("An error occurred!");
    }
    exports.neverEnds = neverEnds;
    // - not nullable Types ------------------------------------------------------------------------------------------------
    function tryToReturnNull(paramShouldNotBeNull) {
        return paramShouldNotBeNull == "Mike" ? paramShouldNotBeNull : null;
    }
    exports.tryToReturnNull = tryToReturnNull;
});
//# sourceMappingURL=objects.and.types.js.map