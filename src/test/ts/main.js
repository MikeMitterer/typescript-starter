"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var assert = require("assert");
describe("Some main functions", function () {
    it("should say Mike", function () {
        assert.equal(sayMyName(), "Mike");
    });
});
