import * as assert from "assert";

describe("index", () => {

    it("Number should be 28", () => {
        const numberToTest = "29";
        assert.ok(String(28) === numberToTest,
            `Number was not 28 but was ${numberToTest}`);

        const myName = "Mike";
        assert.equal(myName, "Mike");
    });

    it("Array", () => {

        const hobbies: number[] = [ 1, 2, 3];
        assert.equal(hobbies.length, 3);

        const names1 = [ "Mike", 2];
        assert.equal(names1.length, 2);
    });

    it("Tuples", () => {
        const address: [string, number] = ["Mike", 99];

        assert.equal(address.length, 2);
    });

    it("enum", () => {
        enum Color {
            RED, GREEN, BLUE = 5,
        }

        // assert.equal(Color.)
        const color: Color = Color.GREEN;
        assert.equal(color, 1);
        assert.equal(Color.BLUE, 5);

    });

    it("The car should have 4 wheels", () => {
        const car = { brand : "Audi", wheels : 4 };
        assert.equal(car.wheels, 4, `Number of wheels should be 4 but was ${car.wheels}`);
    });

});
