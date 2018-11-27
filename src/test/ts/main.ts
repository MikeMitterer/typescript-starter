import { sayMyName } from "../../main/ts";
import { endsWith } from "../../main/ts/main";

describe("Some main functions 1", () => {

    test("should say Mike2", () => {
        expect(sayMyName()).toBe("Mike");
    });
});

describe("#endsWith()", () => {

    it("should return true when the value ends with the suffix", () => {
        expect(endsWith("abcd", "bcd")).toBe(true);
    });

    it("should return false when the value does not end with the suffix", () => {
        expect(endsWith("abcd", "cde")).toBe(false);
    });
});
