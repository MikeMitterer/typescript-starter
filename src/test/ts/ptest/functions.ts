import { returnMyName } from "@main/main";
import {functionWithDefaultParams, functionWithOptionalParams, myCallback} from "@main/ptest/functions";
import * as assert from "assert";

describe("functions", () => {
    it("test simple function", () => {
        assert.equal(returnMyName(), "Mike4");
    });

    it("function as param", () => {
        // Prototype definition
        let callback: () => string;

        callback = myCallback;
        assert.equal(callback(), "Mike6");
    });

    it("should check age as optional param", () => {
        assert.equal(functionWithOptionalParams("Mike", 51),
            "Hi Mike, your age is 51");

        assert.equal(functionWithOptionalParams("Mike"),
            "Hi Mike, your age is <undefined>");
    });

    it("should return Mike Mitterer", () => {
        assert.equal(functionWithDefaultParams("Mike"), "Hi Mike Mitterer");
        assert.equal(functionWithDefaultParams("Gerda", "Riedmann"), "Hi Gerda Riedmann");
    });
});
