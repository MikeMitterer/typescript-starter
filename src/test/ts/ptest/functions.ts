import "mocha";
import * as assert from "assert";
import {functionWithDefaultParams, functionWithOptionalParams, myCallback} from "../../../main/ts/ptest/functions";
import { returnMyName } from "../../../main/ts/main";

describe("functions", () => {
    it("test simple function", function () {
        assert.equal(returnMyName(),"Mike4")
    });

    it("function as param", function () {
        // Prototype definition
        let callback : () => string;

        callback = myCallback;
        assert.equal(callback(),"Mike6")
    });

    it('should check age as optional param', function () {
        assert.equal(functionWithOptionalParams("Mike", 51),
            "Hi Mike, your age is 51");

        assert.equal(functionWithOptionalParams("Mike"),
            "Hi Mike, your age is <undefined>");
    });

    it('should return Mike Mitterer', function () {
        assert.equal(functionWithDefaultParams("Mike"), "Hi Mike Mitterer");
        assert.equal(functionWithDefaultParams("Gerda", "Riedmann"), "Hi Gerda Riedmann");
    });
});