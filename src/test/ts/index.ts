import "mocha";
import * as assert from "assert";
import { SmokeTest } from "../../main/ts";

describe("index", () => {

    it("should say 'hello world'", () => {

        SmokeTest.helloWorld6();
        assert.ok(true);

        SmokeTest.sayMyName();

        // assert.equal(giveAge(), 98)
    });

    it("Number should be 28", function () {
        let numberToTest = "28";
        assert.ok(String(28) === numberToTest,
            `Number was not 28 but was ${numberToTest}`);

        let myName = "Mike";
        assert.equal(myName,"Mike")
    });

    it("Array", function () {

        let hobbies : number[] = [ 1,2,3];
        assert.equal(hobbies.length,3)

        let names1 = [ "Mike", 2];
        assert.equal(names1.length,2)
    });

    it("Tuples", function () {
        let address : [String,number] = ['Mike', 99]

        assert.equal(address.length,2)
    });

    it("enum", function () {
        enum Color {
            RED, GREEN, BLUE = 5
        }

        //assert.equal(Color.)
        let color : Color = Color.GREEN;
        assert.equal(color,1)
        assert.equal(Color.BLUE,5)

    });

    it("The car should have 4 wheels", function () {
        let car = { brand : "Audi", wheels : 4 }
        assert.equal(car.wheels,4, `Number of wheels should be 4 but was ${car.wheels}`)
    });

});