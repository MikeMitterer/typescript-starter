import { sayMyName } from "../../main/ts";
import { endsWith } from "../../main/ts/main";

describe("Some main functions", () => {

    test("should say Mike2", () => {
        expect(sayMyName()).toBe("Mike");
    })
});

describe('#endsWith()', function () {

    it('should return true when the value ends with the suffix', function () {
        expect(endsWith("abcd", "bcd")).toBe(true);
    });

    it('should return false when the value does not end with the suffix', function () {
        expect(endsWith("abcd","cde")).toBe(false);
    });
});
