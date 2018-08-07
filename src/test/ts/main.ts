import "mocha";
import * as assert from "assert";
import { returnGerdasName } from "../../main/ts/main";

describe("Some main functions", () => {
    it("should say Gerda",() => {
        assert.equal(returnGerdasName(),"Gerda")
    })
})