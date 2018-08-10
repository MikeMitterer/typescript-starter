import "mocha";
import * as assert from "assert";
import {giveAge, returnGerdasName, SmokeTest} from "../../main/ts/main";

describe("Some main functions", () => {

    it("should say 'hello world'", () => {

        SmokeTest.helloWorld6();
        assert.ok(true);

        SmokeTest.sayMyName();
        assert.equal(giveAge(), 99)
    });


    it("should say Gerda",() => {
        assert.equal(returnGerdasName(),"Gerda")
    })
})